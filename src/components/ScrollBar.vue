<template>
    <div class="scrollbar-wrapper">
        <div @click="calculatePosition" :id="barId" class="scrollbar">
            <div @mousedown="bindMouseDown" @mouseup="clear" :id="sliderId" class="scrollbar-slider"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                barId: '',
                sliderId: '',
            };
        },
        methods: {
            bindMouseDown() {
                document.onmousemove = this.calculatePosition;
            },
            clear() {
                document.onmousemove = null;
            },
            calculatePosition(event) {
                const mousePos = event.clientX;
                const sliderOffset = this.calculateSliderOffset();

                // Making the lowest point on the bar zero
                const absolutePosOnBar = mousePos - this.barOffset;
                
                // Half of the slider is insignificant for calculating
                // the length travelled by it. Hence - (this.sliderWidth / 2)
                let posOnBar = absolutePosOnBar - (this.sliderWidth / 2);

                // The length of the bar actually used for calculation purposes
                const clickableAreaLength = this.barWidth - this.sliderWidth;

                // The maximum distance on the bar
                if (posOnBar > clickableAreaLength) {
                    posOnBar = clickableAreaLength;
                }
 
                // If the mouse curser is left or right of the scrollbar
                // (i.e. not on the scrollbar)
                // stop doing scrolling
                if ((absolutePosOnBar < 0) || (posOnBar > this.barWidth + this.barOffset))  {
                    this.clear();
                }

                const slider = document.getElementById(this.sliderId);

                // The distance travelled as percentage
                // to be sent to the gallery component
                let percToSend = (posOnBar * 100 ) / clickableAreaLength;

                let displayPerc = posOnBar;

                // This is done to prevent the slider move behind
                // its "point 0"
                if (0 > displayPerc) {
                    displayPerc = 0;
                }

                this.$scrollBus.$emit('change', (percToSend));
                slider.style.left = displayPerc + 'px';

            },
            elementPos(el) {
                const rect = el.getBoundingClientRect(),
	            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	            return rect.left + scrollLeft;
            },
            calculateSliderOffset() {
                const slider = document.getElementById(this.sliderId);
                //const rect = slider.getBoundingClientRect();
                //return rect.left;
                return this.elementPos(slider);
            }
        },
        computed: {
            barWidth() {
                const bar = document.getElementById(this.barId);
                return bar.offsetWidth;
            },
            sliderWidth() {
                const slider = document.getElementById(this.sliderId);
                return slider.offsetWidth;
            },
            barOffset() {
                const bar = document.getElementById(this.barId);
                return this.elementPos(bar);
            },
        },
        created() {
            this.barId = Math.random().toString(36).substring(7);
            this.sliderId = Math.random().toString(36).substring(7);
        },
    };
</script>
