<template>
   <div class="card">
      <router-link
         class="name"
         :to="{ name: 'Detail', params: { id: surah.number_of_surah } }"
         >📌 {{ surah.name }}</router-link
      >

      <p class="translation">
         🔎
         {{
            language === "eng"
               ? surah.name_translations.en
               : surah.name_translations.id
         }}
      </p>

      <p class="number_of_surah">
         {{ language === "eng" ? "🔢 Number of surah" : "🔢 Surah ke" }} :
         {{ surah.number_of_surah }}
      </p>

      <p class="number_of_ayah">
         {{ language === "eng" ? "🔢 Number of ayah" : "🔢 Jumlah ayat" }}:
         {{ surah.number_of_ayah }}
      </p>

      <p class="type">🗺 {{ surah.type }}</p>
   </div>
</template>

<script>
   import { computed } from "vue";
   import { useStore } from "vuex";

   export default {
      props: ["surah"],

      setup() {
         const language = computed(() => useStore().getters.getLanguage);
         return { language };
      },
   };
</script>

<style scoped>
   p {
      color: #e9d8e0;
      font-size: 1rem;
      margin-bottom: 9px;
      font-family: monospace;
   }

   .card {
      padding: 20px;
      color: #ffffff;
      border-radius: 1px;
      margin-bottom: -1px;
      letter-spacing: 0.9px;
      font-family: monospace;
      background-color: #131c25;
      border-top: 4px solid #253a50;
   }

   .name {
      color: #b485d8;
      font-weight: bold;
      font-size: 1.4rem;
      text-decoration: none;
   }

   .name:hover {
      text-decoration: underline;
   }

   .translation {
      margin-top: 23px;
   }

   .type {
      margin-bottom: 5px;
   }

   @media screen and (min-width: 770px) {
      .name {
         font-size: 1.3rem;
         margin-bottom: 20px;
      }

      p {
         font-size: 1rem;
         margin-bottom: 13px;
      }
   }

   @media screen and (min-width: 900px) {
      .card {
         padding: 30px;
      }

      .name {
         font-size: 1.3rem;
      }

      p {
         font-size: 1rem;
      }
   }
</style>
