const home = { template: '<home></home>' }
const about = { template: '<about><about>'}

const routes = [
    { path: '/', component: home },
    { path: '/about', component: about }
]

const router = new VueRouter({
    routes
})