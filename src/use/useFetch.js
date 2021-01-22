import { onMounted, onUnmounted, ref } from "vue";

export default function useFetch(endpoint) {
   const controller = new AbortController();
   const { signal } = controller;

   const data = ref();
   const isLoading = ref(true);

   onMounted(async () => {
      try {
         const res = await fetch(endpoint, { signal });
         data.value = await res.json(endpoint);
      } catch (err) {
         throw new Error(err);
      }

      isLoading.value = false;
   });

   onUnmounted(() => controller.abort());

   return {
      data,
      isLoading,
   };
}
