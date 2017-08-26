# Vue Detached Scrollbar

This is a simple scrollbar that you can detach from the element that you want to scroll in. It comes with a minimal HTML structure.

### Installation

Demo: https://ozangulle.github.io/vue-detached-scrollbar/

### Installation

Simply type

```sh
npm install --save vue-detached-scrollbar
```

Obviously, you'll need Vue.js to run it.

Currently, there is no compiled dist version. The components, Gallery and Scroll-Bar communicate with each other via scrollBus. 
You'll need to import and register it as data.

```javascript
import {scrollBus} from 'vue-detached-scrollbar'

const app = new Vue({
  data: {
    scrollBus,
  },
}
```

Inside the components where you want to use Gallery and Scrollbar, you simply register them as components

```javascript
import {ScrollBar} from 'vue-detached-scrollbar';

export default {
    components: {
        ScrollBar,
    },
}
```

```javascript
import {Gallery} from 'vue-detached-scrollbar';

export default {
    components: {
        Gallery,
    },
}
```

You can put whatever content you want to use between the tags <gallery> </gallery>

Due to the nature of the mouse event listener, you should put a onmouseup="document.onmousemove = null" on the main body of the document.


### To-do

* Write tests

### Development

Want to contribute? I can only work on this project on my free time, so any help is welcome.

Please refer to Contributing.md.


License
----

MIT
