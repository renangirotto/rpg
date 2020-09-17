import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// -----------------------------------------------
// Components ------------------------------------
// -----------------------------------------------

// Button
import cButton from './components/c-button.vue'
app.component('c-button', cButton)
// Icon
import cIcon from './components/c-icon.vue'
app.component('c-icon', cIcon)
// Modal
import cModal from './components/c-modal.vue'
app.component('c-modal', cModal)
// Text Field
import cTextField from './components/c-text-field.vue'
app.component('c-text-field', cTextField)

// -----------------------------------------------
// Views -----------------------------------------
// -----------------------------------------------

// Home
import vHome from './views/v-home.vue'
app.component('v-home', vHome)

// -----------------------------------------------
// Mount app -------------------------------------
// -----------------------------------------------
app.mount('#app')