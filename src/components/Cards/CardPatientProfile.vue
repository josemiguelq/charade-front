<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
  >
    <div class="px-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full px-4 flex justify-center">
          <div class="relative">
            <img
              alt="..."
              :src="profileDefault"
              class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
            />
          </div>
        </div>
        <div class="w-full px-4 text-center mt-20">
          <div class="flex justify-center py-4 lg:pt-4 pt-8">
            <div class="mr-4 p-3 text-center">
              <span
                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
              >
                1
              </span>
              <span class="text-sm text-blueGray-400">Idade</span>
            </div>
            <div class="mr-4 p-3 text-center">
              <span
                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
              >
                2
              </span>
              <span class="text-sm text-blueGray-400">Avaliações</span>
            </div>
            <div class="lg:mr-4 p-3 text-center">
              <span
                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
              >
                89
              </span>
              <span class="text-sm text-blueGray-400">Plano de intervenções</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-8">
        <h3
          class="text-xl font-semibold leading-normal mb-2 text-blueGray-700"
        >
          Joao Gabriel
        </h3>      
      </div>
      <div class="mt-4 py-10 border-t border-blueGray-200 text-center">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-9/12 px-4">
            <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
              Joao gosta de gatos, gosta de interagir por gestos.
            </p>            
          </div>
        </div>
      </div>
      <div class="mt-4 py-10 border-t border-blueGray-200 text-center">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-6/12 p-4">
            <CardAction title="Avaliar" iconName="fas fa-chart-pie"/>            
          </div>
          <div class="w-full lg:w-6/12 p-4">
            <CardAction title="Plano de intervenção"/>
          </div>
          <div class="w-full lg:w-6/12 p-4">
            <CardAction
              title="Registro diário" 
              description="Registre a evoluçao"
              actionLink="/admin/evaluation/select"/>
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import profileDefault from "@/assets/img/profile-default.png";
import CardAction from "./CardAction.vue";

export default {
    data() {
        return {
          profileDefault,
        };
    },
    components: { CardAction }
};
</script>
