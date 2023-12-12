<template>
    <div class="flex flex-wrap">    
      <div class="w-full px-4">
        <CardEvaluation nextScreen="/admin/evaluation/sub"/>
      </div>
    </div>
  </template>
  <script>
  import CardEvaluation from "@/components/Cards/evaluation/CardEvaluation.vue";
  
  export default {
    components: {    
        CardEvaluation,
    },
  };
  </script>
  