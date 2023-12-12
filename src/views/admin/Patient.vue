<template>
  <div class="flex flex-wrap">    
    <div class="w-full px-4">
      <CardPatient />
    </div>
  </div>
</template>
<script>
import CardPatient from "@/components/Cards/CardPatient.vue";

export default {
  components: {    
    CardPatient,
  },
};
</script>
