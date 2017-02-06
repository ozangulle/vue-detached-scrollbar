import Vue from 'vue';
import ScrollBar from './components/ScrollBar';
import Gallery from './components/Gallery';


Object.defineProperty(Vue.prototype, '$bus', {
    get() {
        return this.$root.bus;
    }
});

var bus = new Vue({})

const app = new Vue({
  data: {
    bus,
  },
  components: {
    ScrollBar,
    Gallery,
  },
});

export default app;

export {
	ScrollBar,
	Gallery,
  bus,
};