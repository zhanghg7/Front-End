import Vue from 'vue';
import Router, { RouterOptions, RouteRecord, NavigationGuard, Route } from 'vue-router';

Vue.use(Router);

const routers: RouterOptions = {
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: require('@/pages/login').default
        },
        {
            path: '/',
            name: 'Home',
            component: require('@/pages/home').default
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
};

const router = new Router(routers)

router.beforeEach((to: Route, from: Route, next: () => void) => {
    next();
})

export default router;