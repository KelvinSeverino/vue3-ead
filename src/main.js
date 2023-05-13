import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugins from './plugins'

createApp(App)
    .use(store)
    .use(router)
    .use(plugins.Notifications)
    .mount('#app')
