Vue.component('nav-bar', {
    template: //html 
    `
        <header class="header">
            <nav>
                <router-link to="/" class="logo">
                    <logo></logo>
                </router-link>
                <ul class="nav-menu">
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">ABOUT</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/skills" class="nav-link">SKILLS</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/projects" class="nav-link">PROJECTS</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/blog" class="nav-link">BLOG</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link">CONTACT</router-link>
                    </li>
                </ul>
            </nav>
    </header>
    `

})