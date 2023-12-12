<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <IntervertionTable />
      </div>
    </div>
  </template>
  <script>
  import IntervertionTable from "@/components/Cards/intervertion/IntervertionTable.vue";
  
  export default {
    components: {
        IntervertionTable,
    },
  };
  </script>
  