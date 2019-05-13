import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const routes = [
    // {
    //     path: '/user',
    //     name: 'user',
    //     displayName: 'User',
    //     component: UserList,
    //
    //     children: []
    // }
];

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [

        ...routes
    ],
});
