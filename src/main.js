import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import { projectAuth } from './firebase/config';

let app;

projectAuth.onAuthStateChanged(() => {
    //every time there is a authentication change this will fire
    if(!app) {
        //if app doesn't have a value then mount app
        app = createApp(App).use(router).mount('#app')
    }
})


