import { createStore } from "vuex";

export default createStore({
   state() {
      return {
         language: "eng",
      };
   },

   getters: {
      getLanguage(state) {
         return state.language;
      },
   },
});
