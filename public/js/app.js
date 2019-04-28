const App = Vue.component('App', {
    template: //html 
    `<div>
        <div class="loader"></div>
        <div>
            <nav-bar></nav-bar>
            <main>
                <router-view></router-view>
            </main>
            <footer>

            </footer>
        </div>
    </div>
    `
})