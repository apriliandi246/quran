<template>
   <Header />

   <div v-if="isLoading">
      <Skeleton />
   </div>
   <div v-else v-for="surah in data" :key="surah.number_of_surah">
      <Card :surah="surah" />
   </div>
</template>

<script>
   import useFetch from "../use/useFetch";
   import Card from "../components/Card.vue";
   import Header from "../components/Header.vue";
   import Skeleton from "../components/Skeleton.vue";

   export default {
      components: {
         Card,
         Header,
         Skeleton,
      },

      setup() {
         const { data, isLoading } = useFetch(
            "https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json"
         );

         return {
            data,
            isLoading,
         };
      },
   };
</script>
