# Vue Detached Scrollbar

This is a simple scrollbar that you can detach from the element that you want to scroll in. It comes with a minimal HTML structure.

### Installation

Demo: https://ozangulle.github.io/vue-detached-scrollbar/

### Installation

Simply type

```sh
npm install --save vue-detached-scrollbar
```

You'll need Vue.js to run it.

The components, Gallery and ScrollBar communicate with each other via scrollBus. 
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

You can customize the scrollbar using the css classes .scrollbar, .scrollbar-slider, and .scrollbar-wrapper. .scrollbar refers to the bar itself whereas .scrollbar-slider is the slider in it.


```javascript
import {Gallery} from 'vue-detached-scrollbar';

export default {
    components: {
        Gallery,
    },
}
```

You can put whatever content you want to use between the tags <gallery> </gallery>. For example:

```javascript
<gallery>
    <div id="gallery" class="gallery">
        <div class="gallery-item" v-for="image in imageGallery">
            <img :src="image.src">
        </div>
    </div>
</gallery>
```

It's important to keep the id 'gallery'. The package uses the id to select it.



Due to the nature of the mouse event listener, you should put a onmouseup="document.onmousemove = null" on the main body of the document.


### To-do

* Write tests

### Development

Want to contribute? I can only work on this project on my free time, so any help is welcome.

Please refer to Contributing.md.


License
----

MIT
