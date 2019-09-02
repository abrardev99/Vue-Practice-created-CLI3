// when exporting here, import this specific variable only works
import Home from './components/HelloWorld.vue';
import About from './components/About.vue';
import ContactUs from './components/ContactUs.vue'
import aboutDetails from './components/AboutDetails.vue'


export const routes = [
    { path: '', component: Home },
    {
        path: '/about', component: About
    },
    { path: '/contact', component: ContactUs }

];