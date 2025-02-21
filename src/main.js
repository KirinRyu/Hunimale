import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass)
library.add(faCartShopping)

const app = createApp(App)
app.component( 'font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
