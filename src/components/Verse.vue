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
      border-top: 7px dashed #253a50;
   }

   .number {
      font-size: 1.1rem;
      font-weight: bold;
      border-radius: 100%;
      font-family: monospace;
   }

   .verse {
      margin-top: 25px;
      text-align: right;
      font-size: 1.1rem;
      font-weight: bold;
      line-height: 36px;
      margin-bottom: 35px;
   }

   .translation {
      font-size: 1rem;
      line-height: 27px;
      letter-spacing: 1.2px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
         Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
   }
</style>
