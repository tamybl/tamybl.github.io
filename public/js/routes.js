const routes = [
    { path: '/', component: home },
    { path: '/about', component: about },
    { path: '/skills', component: skills},
    { path: '/projects', component: projects }
]

const router = new VueRouter({
    //mode: 'history',
    routes
})