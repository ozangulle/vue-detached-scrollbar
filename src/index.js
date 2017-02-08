import Vue from 'vue';
import ScrollBar from './components/ScrollBar';
import Gallery from './components/Gallery';


Object.defineProperty(Vue.prototype, '$scrollBus', {
    get() {
        return this.$root.scrollBus;
    }
});

const scrollBus = new Vue({})

const app = new Vue({
  data: {
    scrollBus,
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
  scrollBus,
};