<template>
   <div class="container">
      <router-view />
      <div v-if="scrollValue !== 0" @click="scrollToTop" class="scroll-top">
         🔼
      </div>
   </div>
</template>

<script>
   import { computed, ref } from "vue";

   export default {
      setup() {
         const scrollValue = ref(window.scrollY);

         function scrollToTop() {
            window.scrollTo(0, 0);
         }

         window.addEventListener("scroll", () => {
            scrollValue.value = window.scrollY;
         });

         return {
            scrollToTop,
            scrollValue,
         };
      },
   };
</script>

<style scoped>
   .container {
      width: 92%;
      margin: 0 auto 30px auto;
   }

   .scroll-top {
      top: 90%;
      right: 0;
      padding: 8px;
      cursor: pointer;
      position: fixed;
      font-size: 1.3rem;
      border-radius: 4px;
      margin-right: 28px;
      transition: transform 0.1s;
      background-color: #38516d;
   }

   .scroll-top:hover {
      transform: scale(1.1);
   }

   @media screen and (min-width: 600px) {
      .container {
         width: 90%;
      }
   }

   @media screen and (min-width: 770px) {
      .container {
         width: 86%;
      }
   }

   @media screen and (min-width: 900px) {
      .container {
         width: 80%;
      }
   }

   @media screen and (min-width: 980px) {
      .container {
         width: 77%;
      }
   }

   @media screen and (min-width: 1060px) {
      .container {
         width: 73%;
      }
   }

   @media screen and (min-width: 1100px) {
      .container {
         width: 69%;
      }
   }

   @media screen and (min-width: 1160px) {
      .container {
         width: 63%;
      }
   }

   @media screen and (min-width: 1300px) {
      .container {
         width: 60%;
      }
   }

   @media screen and (min-width: 1450px) {
      .container {
         width: 57%;
      }
   }

   @media screen and (min-width: 1570px) {
      .container {
         width: 54%;
      }
   }

   @media screen and (min-width: 1750px) {
      .container {
         width: 49%;
      }
   }

   @media screen and (min-width: 1850px) {
      .container {
         width: 46%;
      }
   }
</style>
