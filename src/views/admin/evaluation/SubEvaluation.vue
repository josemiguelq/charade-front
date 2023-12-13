<template>
    <div class="flex flex-wrap">      
      <div class="w-full">
        <CardSubEvaluation :subEvaluations="subEvaluations" :category="$route.params.id"/>
      </div>
    </div>
  </template>
  <script>
  import CardSubEvaluation from "@/components/Cards/evaluation/CardSubEvaluation.vue";
  
  export default {
    components: {    
      CardSubEvaluation,
    },
    data() {
      return {
        subEvaluations: [
          {name: 'Avaliação de Marcos do Desenvolvimento'},
          {name: 'Avaliação de Barreiras'},
          {name: 'Avaliação de Transição'},
          {name: 'Avaliação de Transição'},
        ]
      }
    }
  };
  </script>
  