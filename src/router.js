import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import AboutMe from './pages/AboutMe.vue';
import Contact from './pages/Contact.vue';
import ProjectShow from './pages/ProjectShow.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectsIndex,
            meta: {
                title: 'Tutti i progetti'
            }

        },
        {
            path: '/about',
            name: 'about',
            component: AboutMe,
            meta: {
                title: 'Chi sono'
            }

        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
            meta: {
                title: 'Contatti'
            }

        },
        {
            path: '/project/:slug',
            name: 'project.show',
            component: ProjectShow
        }
    ]
});

router.beforeEach((to) => {
    document.title = to.meta?.title ? 'Boolfolio - ' + to.meta.title : 'Boolfolio';
});

export { router };