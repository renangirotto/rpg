import { createApp } from 'vue'
import router from './router/router'
import store from './store/store'
import App from './App.vue'
const app = createApp(App)

// -----------------------------------------------
// UI Components ---------------------------------
// -----------------------------------------------
// Button
import cButton from '@/components/ui/c-button.vue'
app.component('c-button', cButton)
// Icon
import cIcon from '@/components/ui/c-icon.vue'
app.component('c-icon', cIcon)
// Modal
import cModal from '@/components/ui/c-modal.vue'
app.component('c-modal', cModal)
// Text Field
import cTextField from '@/components/ui/c-text-field.vue'
app.component('c-text-field', cTextField)

// -----------------------------------------------
// Rout ------------------------------------------
// -----------------------------------------------
app.use(router)

// -----------------------------------------------
// Store -----------------------------------------
// -----------------------------------------------
app.use(store)

// -----------------------------------------------
// Mount app -------------------------------------
// -----------------------------------------------
app.mount('#app')