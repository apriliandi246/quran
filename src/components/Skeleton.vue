<template>
   <div class="skeleton">
      <div class="block first_block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
   </div>
   <div class="skeleton">
      <div class="block first_block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
   </div>
   <div class="skeleton">
      <div class="block first_block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
   </div>
   <div class="skeleton">
      <div class="block first_block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
   </div>
   <div class="skeleton">
      <div class="block first_block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
   </div>
   <div class="skeleton">
      <div class="block first_block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
   </div>
</template>

<style scoped>
   .skeleton {
      width: 92%;
      padding: 18px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-top: 5px solid #583672;
   }

   .first_block {
      margin-top: 22px;
   }

   .block {
      width: 100%;
      height: 26px;
      border-radius: 4px;
      margin-bottom: 25.4px;
      animation: loading 1s ease-in-out infinite alternate;
   }

   @media screen and (min-width: 770px) {
      .skeleton {
         border-top: 5px solid #583672;
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
