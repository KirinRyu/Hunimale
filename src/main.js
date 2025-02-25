import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping, faClock, faCopyright, faEnvelope, faLocationDot, faMagnifyingGlass, faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add(faMagnifyingGlass)
library.add(faCartShopping)
library.add(faCopyright)
library.add(faLocationDot)
library.add(faPhoneFlip)
library.add(faEnvelope)
library.add(faClock)
library.add(faInstagram)
library.add(faTiktok)
library.add(faWhatsapp)

const app = createApp(App)
app.component( 'font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
