<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <card-users />
    </div>
  </div>
</template>
<script>
import CardUsers from "@/components/Cards/CardUsers.vue";

export default {
  components: {
    CardUsers,
  },
};
</script>
