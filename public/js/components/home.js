const home = Vue.component('home', {
    template: //html 
    `
    <div class="home">
        <div class="header-content">
        <h1 class="title-site">{{title}}</h1>
        <h2>Frontend Developer</h2>
        </div>
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