import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#fd2459",
        secondary: "#fa7a4e",
        default: "#2c3e50"
      }
    }
  }
});
