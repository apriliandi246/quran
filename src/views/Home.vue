<template>
   <Header />
   <Skeleton />
   <Skeleton />
   <Skeleton />
   <Skeleton />
</template>

<script>
   import Skeleton from "../components/Skeleton.vue";
   import Header from "../components/Header.vue";
   import Surah from "../components/Surah.vue";

   export default {
      components: {
         Header,
         Surah,
         Skeleton,
      },
   };
</script>
