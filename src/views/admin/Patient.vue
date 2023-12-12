<template>
  <div class="flex flex-wrap">    
    <div class="w-full px-4">
      <CardPatientProfile />
    </div>
  </div>
</template>
<script>
import CardPatientProfile from "@/components/Cards/CardPatientProfile.vue";

export default {
  components: {    
    CardPatientProfile,
  },
};
</script>
