<template>
   <Header />

   <div v-if="data.length === 0">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
   </div>
   <div v-else v-for="surah in data" :key="surah.number_of_surah">
      <Card :surah="surah" />
   </div>
</template>

<script>
   import Skeleton from "../components/Skeleton.vue";
   import Header from "../components/Header.vue";
   import Card from "../components/Card.vue";

   const controller = new AbortController();
   const { signal } = controller;

   export default {
      data() {
         return {
            data: [],
         };
      },

      components: {
         Header,
         Card,
         Skeleton,
      },

      mounted() {
         fetch(
            "https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json",
            signal
         )
            .then((res) => res.json())
            .then((result) => (this.data = result))
            .catch((err) => console.log(err));
      },

      unmounted() {
         controller.abort();
      },
   };
</script>
