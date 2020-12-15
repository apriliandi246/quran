<template>
   <div class="card">
      <router-link to="/surah/1" class="name">📌 Al-Fatiha</router-link>
      <p class="translation">🔎 The Opening</p>
      <p class="number_of_surah">🔢 Number of surah : 1</p>
      <p class="number_of_ayah">🔢 Number of ayah : 7</p>
      <p class="type">🗺 Mecca</p>
   </div>
</template>

<script>
   export default {};
</script>

<style scoped>
   .card {
      padding: 23px;
      color: #ffffff;
      margin-bottom: -1px;
      letter-spacing: 0.9px;
      font-family: monospace;
      border-top: 9px dotted #583672;
   }

   .name {
      color: #b485d8;
      font-weight: bold;
      font-size: 1.5rem;
      text-decoration: none;
   }

   .name:hover {
      text-decoration: underline;
   }

   .translation {
      margin-top: 23px;
   }

   .type {
      margin-bottom: 2px;
   }

   p {
      color: #e9d8e0;
      font-size: 1.1rem;
      margin-bottom: 11px;
      font-family: monospace;
   }

   @media screen and (min-width: 770px) {
      .card {
         border-top: 11px dotted #583672;
      }

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
