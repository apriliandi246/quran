<template>
   <div class="card">
      <span class="number">{{ verse.number }}</span>
      <p class="verse">{{ verse.text }}</p>
      <p class="translation">
         {{ language === "eng" ? verse.translation_en : verse.translation_id }}
      </p>

      <details v-if="language === 'id'">
         <summary>Tafsir</summary>
         <p class="interpretation">
            {{ interpretation }}
         </p>
      </details>
   </div>
</template>

<script>
   import { computed } from "vue";
   import { useStore } from "vuex";

   export default {
      props: ["verse", "interpretation"],

      setup() {
         const language = computed(() => useStore().getters.getLanguage);
         return { language };
      },
   };
</script>

<style scoped>
   .card {
      color: #ffffff;
      border-top: 5px solid #253a50;
   }

   .number {
      padding: 3px;
      font-size: 1.1rem;
      font-weight: bold;
      border-radius: 4px;
      font-family: monospace;
   }

   @font-face {
      font-family: quranFont;
      src: url("/quran.OTF");
   }

   .verse {
      margin-top: 25px;
      font-size: 1.8rem;
      text-align: right;
      line-height: 50px;
      margin-bottom: 35px;
      font-family: quranFont;
   }

   .interpretation,
   .translation {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
         Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
   }

   summary,
   .translation,
   .interpretation {
      font-size: 1rem;
      line-height: 24px;
      letter-spacing: 1px;
   }

   details {
      margin-top: 30px;
   }

   summary {
      outline: none;
   }

   summary:hover {
      cursor: pointer;
   }

   .interpretation {
      margin-top: 20px;
   }

   @media screen and (min-width: 760px) {
      .verse {
         line-height: 64px;
      }

      summary,
      .translation,
      .interpretation {
         font-size: 1rem;
         line-height: 31px;
      }
   }
</style>
