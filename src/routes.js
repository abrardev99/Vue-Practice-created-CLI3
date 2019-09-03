// when exporting here, import this specific variable only works
import Home from './components/HelloWorld.vue';
import About from './components/About.vue';
import ContactUs from './components/ContactUs.vue';
import AboutDetails from './components/AboutDetails.vue';
import Redirect from './components/Redirect.vue';


export const routes = [
    { path: '', component: Home },
    {
        path: '/about', component: About, children: [
            {// nested route not working yet
                path: 'detail', component: AboutDetails
            },
        ],
    },

    { path: '/detail', component: AboutDetails },
    { path: '/contact', component: ContactUs, name: 'cont' },


    { path: '/redirect-path', component: Redirect },
    // handling wrong paths: redirections
    { path: '/*', redirect: 'redirect-path' }

];