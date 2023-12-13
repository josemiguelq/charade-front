<template>
    <div class="flex flex-wrap">    
      <div class="w-full px-4">
        <CardEvaluation 
        :evaluations="evaluations" 
        :evaluationsSoon="evaluationsSoon"
        nextScreen="/admin/evaluation/vb-mapp/sub"/>
      </div>
    </div>
  </template>
  <script>
  import CardEvaluation from "@/components/Cards/evaluation/CardEvaluation.vue";

  export default {
    components: {    
        CardEvaluation,
    },
    data() {
      return {
        evaluations: [
                {
                  title: 'VB-MAPP',
                  description: 'Vineland Adaptive Behavior Scales - avaliação do desenvolvimento comportamental'
                }
              ],
        evaluationsSoon: [{title: 'ABBLS', description: 'Em breve'}],
      }
    }
  };
  </script>
  