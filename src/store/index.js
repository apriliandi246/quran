import { createStore } from "vuex";

const lg = localStorage.getItem("language");

export default createStore({
   state() {
      return {
         language: lg === null ? "id" : lg,
      };
   },

   getters: {
      getLanguage(state) {
         return state.language;
      },
   },

   mutations: {
      changeLanguage(state, language) {
         state.language = language;
      },
   },
});
