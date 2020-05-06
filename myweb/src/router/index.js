import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Auth/Login'
import NewFeed from '@/views/NewFeed'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: NewFeed
        }, {
            path: '/new-feed',
            name: 'NewFeed',
            component: NewFeed
        },
        // {
        //     path: '/newfeed',
        //     name: 'NewFeed',
        //     component: NewFeed
        // },
    ]
})