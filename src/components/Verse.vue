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
   export default {
      props: ["verse", "interpretation"],

      computed: {
         language() {
            return this.$store.getters.getLanguage;
         },
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

   .verse {
      margin-top: 25px;
      line-height: 32px;
      text-align: right;
      font-size: 1.2rem;
      margin-bottom: 35px;
      font-family: "Amiri", serif;
   }

   summary,
   .translation,
   .interpretation {
      font-size: 1rem;
      line-height: 21px;
      letter-spacing: 0.5px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
         Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
         line-height: 38px;
      }

      summary,
      .translation,
      .interpretation {
         font-size: 0.9rem;
         line-height: 27px;
      }
   }
</style>
