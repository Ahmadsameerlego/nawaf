import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import VueGoogleMaps from "@fawmi/vue-google-maps";

// import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";

// jquery
<script  src="https://code.jquery.com/jquery-3.5.1.min.js"  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="  crossorigin="anonymous"></script>


// import firebase 
import './firebase'


// import fontawesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
dom.watch();

// import axios
import axios from 'axios';
axios.defaults.baseURL = 'https://nawaaaf.com/api/';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');   
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.lang = sessionStorage.getItem('lang');

// axios.defaults.headers.lang = sessionStorage.getItem('lang');

// import sweat alert 
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';



// import pagination
import Paginate from "vuejs-paginate-next";


// import i18n
import VueI18n from "vue-i18n";
import i18n from "./i18n";

loadFonts();


loadFonts()



createApp(App)
  .use(router)
  .use(store)
  .use(i18n).use(VueI18n)
  .use(vuetify)
  .use(VueSweetalert2)
  .use(Paginate)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyBNLoYGrbnQI_GMqHt6m0PSN9yA7Zvq7gA",
      // language: 'de',
    
    },
  })
  .mount("#app");
