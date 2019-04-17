new Vue({
    el: '#app',
    data: {
        title: 'Tamara Bravo',
        showModal: false,
        currentData: 'About',
        pages: ['about', 'skills', 'projects', 'contact', 'blog']
    },
    computed: {
        currentComponent: function () {
            return this.currentData.toLowerCase();
        }
    }
})

