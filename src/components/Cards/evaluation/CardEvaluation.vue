<template>
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
    >    
      <div class="px-6">
        <div class="flex flex-wrap justify-center">
          <div class="w-full px-4 text-center mt-20">
            <h1 class="font-bold text-xl">Avaliações</h1>
            <p>Disponiveis no momento</p>
          </div>
        </div>
        <div class="mt-4 py-10 border-t border-blueGray-200 text-center">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <CardAction title="VB-MAPP"
              description="Vineland Adaptive Behavior Scales - avaliação do desenvolvimento comportamental"
              iconName="fas fa-chart-pie" 
              :nextAction="nextScreen"/>            
            </div>                     
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import team2 from "@/assets/img/team-2-800x800.jpg";
  import CardAction from "./../CardAction.vue";
  
  export default {
    props: {
      nextScreen: {required: false},
      evaluations: {required: false}
    },
      data() {
          return {
              team2,
          };
      },
      components: { CardAction }
  };
  </script>
  