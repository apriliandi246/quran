<template>
   <div class="skeleton">
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
   </div>
</template>

<style scoped>
   .skeleton {
      padding: 30px;
      border-top: 8px dotted #583672;
   }

   .block {
      width: 366px;
      height: 30px;
      border-radius: 4px;
      margin-bottom: 25.4px;
      animation: loading 1s ease-in-out infinite alternate;
   }

   @media screen and (min-width: 770px) {
      .skeleton {
         border-top: 11px dotted #583672;
      }
   }

   @keyframes loading {
      0% {
         transform: scale(1);
         background-color: rgba(165, 165, 165, 0.1);
      }

      50% {
         transform: scale(1.01);
         background-color: rgba(165, 165, 165, 0.3);
      }

      100% {
         transform: scale(1);
         background-color: rgba(165, 165, 165, 0.1);
      }
   }
</style>
