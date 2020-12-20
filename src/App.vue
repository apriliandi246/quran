<template>
   <div class="container">
      <router-view />
      <div @click="scrollToTop" class="scroll-top">🔼</div>
   </div>
</template>

<script>
   export default {
      methods: {
         scrollToTop() {
            window.scrollTo(0, 0);
         },
      },
   };
</script>

<style scoped>
   .container {
      width: 92%;
      margin: 0 auto 30px auto;
   }

   .scroll-top {
      top: 88%;
      right: 0;
      padding: 10px;
      cursor: pointer;
      position: fixed;
      font-size: 1.3rem;
      border-radius: 4px;
      margin-right: 30px;
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
