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
                const posInBar = mousePos - this.scrollbarOffset;
                const effectiveWidth = this.barWidth - this.sliderWidth;
                const absolutePerc = (posInBar * 100) / this.barWidth;
                const sliderToBar = (this.sliderWidth * 100) / this.barWidth;
                let distPerc = (posInBar * 100) / effectiveWidth;
                const diff = absolutePerc - distPerc;
                const slider = document.getElementById(this.sliderId);
                if (0 > distPerc) {
                    distPerc = 0;
                } else if (100 < distPerc) {
                    distPerc = 100;
                }
                this.$scrollBus.$emit('change', (distPerc));
                slider.style.left = (distPerc + diff) + '%';
            },
            elementPos(el) {
                const rect = el.getBoundingClientRect(),
	            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	            return rect.left + scrollLeft;
            },
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
            scrollbarOffset() {
                const bar = document.getElementById(this.barId);
                return this.elementPos(bar);
            },
            sliderOffset() {
                const slider = document.getElementById(this.sliderId);
                const rect = slider.getBoundingClientRect();
                return rect.left;
            },
        },
        created() {
            this.barId = Math.random().toString(36).substring(7);
            this.sliderId = Math.random().toString(36).substring(7);
        },
    };
</script>
