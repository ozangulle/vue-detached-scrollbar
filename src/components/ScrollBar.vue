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
            /**
            * Mouse position is clientX.
            * 
            **/
            calculatePosition(event) {
                // Mouse position
                const mousePos = event.clientX;
                const sliderOffset = this.calculateSliderOffset();

                // Position in bar
                const absolutePosOnBar = mousePos - this.barOffset;
                let posOnBar = mousePos - this.barOffset - (this.sliderWidth / 2);

                const activeLength = this.barWidth - this.sliderWidth;

                const clickableAreaLength = this.barWidth - (this.sliderWidth);

                if (posOnBar > activeLength) {
                    posOnBar = activeLength;
                }
 
                
                // If the mouse curser is left or right of the scrollbar
                // (i.e. not on the scrollbar)
                // stop doing scrolling
                if ((absolutePosOnBar < 0) || (posOnBar > this.barWidth + this.barOffset))  {
                    this.clear();
                }

                const slider = document.getElementById(this.sliderId);

                let percToSend = (posOnBar * 100 ) / clickableAreaLength;
                let displayPerc = posOnBar; // percToSend - percDiff;

                if (0 > displayPerc) {
                    displayPerc = 0;
                } /* else if (this.barWidth < displayPerc) {
                    displayPerc = this.barWidth;
                }*/

                console.log(percToSend, posOnBar);

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
            sliderOffset() {
                const slider = document.getElementById(this.sliderId);
                //const rect = slider.getBoundingClientRect();
                //return rect.left;
                return this.elementPos(slider);
            },
        },
        created() {
            this.barId = Math.random().toString(36).substring(7);
            this.sliderId = Math.random().toString(36).substring(7);
        },
    };
</script>
