<template>
   <div class="card">
      <router-link
         class="name"
         :to="{ name: 'Detail', params: { id: surah.number_of_surah } }"
         >📌 {{ surah.name }}</router-link
      >
      <p class="translation">🔎 {{ surah.name_translations.en }}</p>
      <p class="number_of_surah">
         🔢 Number of surah : {{ surah.number_of_surah }}
      </p>
      <p class="number_of_ayah">
         🔢 Number of ayah : {{ surah.number_of_ayah }}
      </p>
      <p class="type">🗺 {{ surah.type }}</p>
   </div>
</template>

<script>
   export default {
      props: ["surah"],
   };
</script>

<style scoped>
   .card {
      padding: 26px;
      color: #ffffff;
      margin-bottom: -1px;
      letter-spacing: 0.9px;
      font-family: monospace;
      background-color: #131c25;
      border-top: 7px dashed #253a50;
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
      margin-bottom: 5px;
   }

   p {
      color: #e9d8e0;
      font-size: 1.1rem;
      margin-bottom: 11px;
      font-family: monospace;
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
