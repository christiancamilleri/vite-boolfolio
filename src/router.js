import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import AboutMe from './pages/AboutMe.vue';
import Contact from './pages/Contact.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectsIndex,

        },
        {
            path: '/about',
            name: 'about',
            component: AboutMe,

        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,

        },
    ]
});

export { router };