// import { library, config } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import {
//   faTwitterSquare,
//   faTwitch,
//   faGithubSquare,
// } from "@fortawesome/free-brands-svg-icons";

// library.add(faTwitterSquare, faTwitch, faGithubSquare);

// // This is important, we are going to let Nuxt worry about the CSS
// config.autoAddCss = false;

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
// });

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
