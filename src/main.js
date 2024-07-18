import { createApp } from 'vue';
import App from './App.vue';

// Import the Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// Import the Font Awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import specific icons
import { 
    faHtml5, 
    faCss3Alt, 
    faJs,
    faNode, 
    faSass, 
    faJsSquare,
    faReact,
    faVuejs, 
    faPhp, 
    faLaravel, 
    faSquareGithub, 
    faFigma,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(
    faHtml5, 
    faCss3Alt, 
    faJs, 
    faNode,
    faSass, 
    faJsSquare, 
    faReact,
    faVuejs, 
    faPhp, 
    faLaravel,
    faSquareGithub, 
    faFigma,
    faLinkedin
);

// Import Tailwind CSS
import './assets/main.css';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
