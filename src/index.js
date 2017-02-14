import Vue from 'vue';
import ScrollBar from './components/ScrollBar';
import Gallery from './components/Gallery';


Object.defineProperty(Vue.prototype, '$scrollBus', {
    get() {
        return this.$root.scrollBus;
    }
});

const scrollBus = new Vue({})

export {ScrollBar};
export {scrollBus};
export {Gallery};