<template>
    <div :id="wrapperId" class="gallery-wrapper">
        <slot></slot>
    </div>
</template>


<script>
    export default {
        data() {
            return{
                wrapperId: '',
            };
        },
        created() {
            this.wrapperId = Math.random().toString(36).substring(7);
            this.$bus.$on('change', (msg) => {
                this.calculateBack(msg);
            });
        },
        methods: {
            calculateBack(distPerc) {
                let posOfBar = (distPerc * this.holderWidth) / 100;
                document.getElementById(this.wrapperId).scrollLeft = posOfBar;
            },
        },
        computed: {
            holderWidth() {
                const full = document.getElementById(this.wrapperId).scrollWidth;
                const client = document.getElementById(this.wrapperId).offsetWidth;
                return full - client;
            },
        },
    }; 
</script>
