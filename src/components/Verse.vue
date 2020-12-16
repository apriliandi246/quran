<template>
   <div class="card">
      <span class="number">{{ verse.number }}</span>
      <p class="verse">{{ verse.text }}</p>
      <p class="translation">{{ verse.translation_en }}</p>
   </div>
</template>

<script>
   export default {
      props: ["verse"],
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
      font-weight: 550;
      margin-top: 25px;
      line-height: 28px;
      text-align: right;
      font-size: 1.1rem;
      margin-bottom: 35px;
   }

   .translation {
      font-size: 1rem;
      line-height: 21px;
      letter-spacing: 0.5px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
         Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
   }

   @media screen and (min-width: 760px) {
      .verse {
         line-height: 38px;
      }

      .translation {
         font-size: 0.9rem;
         line-height: 27px;
      }
   }
</style>
