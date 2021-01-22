<template>
   <Header />

   <div v-if="isLoading">
      <Skeleton />
   </div>
   <div v-else>
      <div class="card">
         <h1 class="name">{{ surah.name }}</h1>

         <p class="translation">
            🔎
            {{
               language === "eng"
                  ? surah.name_translations.en
                  : surah.name_translations.id
            }}
         </p>

         <p class="number_of_surah">
            {{ language === "eng" ? "🔢 Number of surah" : "🔢 Surah ke" }} :
            {{ surah.number_of_surah }}
         </p>

         <p class="number_of_ayah">
            {{ language === "eng" ? "🔢 Number of ayah" : "🔢 Jumlah ayat" }}:
            {{ surah.number_of_ayah }}
         </p>

         <p class="type">🗺 {{ surah.type }}</p>
      </div>

      <div class="recitations">
         <audio
            controls
            preload="metadata"
            controlsList="nodownload"
            :src="surah.recitations[0].audio_url"
         />
      </div>

      <div v-for="verse in surah.verses" :key="verse.number">
         <Verse
            :verse="verse"
            :interpretation="surah.tafsir.id.kemenag.text[verse.number]"
         />
      </div>
   </div>
</template>

<script>
   import { computed } from "vue";
   import { useStore } from "vuex";
   import { useRoute } from "vue-router";
   import useFetch from "../use/useFetch";

   import Card from "../components/Card.vue";
   import Verse from "../components/Verse.vue";
   import Header from "../components/Header.vue";
   import Skeleton from "../components/Skeleton.vue";

   export default {
      components: {
         Card,
         Verse,
         Header,
         Skeleton,
      },

      setup() {
         const id = useRoute().params.id;
         const language = computed(() => useStore().getters.getLanguage);
         const { data, isLoading } = useFetch(
            `https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${id}.json`
         );

         window.scrollTo(0, 0);

         return {
            language,
            isLoading,
            surah: data,
         };
      },
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
      border-top: 5px solid #253a50;
   }

   .name {
      color: #b485d8;
      font-weight: bold;
      font-size: 1.4rem;
      text-decoration: none;
   }

   .translation {
      margin-top: 23px;
   }

   .type {
      margin-bottom: 5px;
   }

   p {
      color: #e9d8e0;
      font-size: 1rem;
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

   audio {
      width: 100%;
      outline: none;
      border-radius: 5px;
      margin-bottom: 30px;
      background-color: #f8f7f7;
   }

   audio::-webkit-media-controls-panel {
      background-color: #f8f7f7;
   }

   audio::-webkit-media-controls-current-time-display,
   audio::-webkit-media-controls-time-remaining-display {
      font-size: 1rem;
      font-weight: bold;
      letter-spacing: 1px;
      font-family: monospace;
   }

   .recitations {
      padding: 20px;
      margin-top: -15px;
   }
</style>
