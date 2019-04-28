Vue.component('home', {
    template: //html 
    `
    <div class="home">
        <h1 class="title-site">{{title}}</h1>
        <div class="header-img">
            <dev-svg></dev-svg>
        </div>
        
    </div>
    `,
    data() {
        return {
            title: 'Tamara Bravo'
        }
    }
})