import { createApp } from 'vue'
import { router } from "./router.js"; // import the router.js
import './style.scss'
import App from './App.vue'


// 5. Create and mount the root instance.
// Make sure to _use_ the router instance to make the
// whole app router-aware.
createApp(App).use(router).mount('#app')
