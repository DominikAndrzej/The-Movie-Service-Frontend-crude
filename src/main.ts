import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Footer from "@/layouts/Footer.vue";
import Header from "@/layouts/Header.vue";
import Main from "@/layouts/Main.vue";

const app = createApp(App);

app.config.errorHandler = (err) => {
    console.log(err);
}

app.component('Footer', Footer)
app.component('Header', Header)
app.component('Main', Main)

async function prepareApp() {
    if (import.meta.env.DEV) {
        const { worker } = await import('@/api/mocks/browser')

        return worker.start({
            onUnhandledRequest: 'bypass',
        })
    }
}

prepareApp().then(() => {
    app.mount('#app')
})
