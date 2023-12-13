<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
  >
    <div class="flex-auto p-4">
      <div class="flex flex-wrap">
        <div class="relative w-auto pl-4 flex-initial">
          <div
            class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full"
            :class="[iconColor]"
          >
            <i :class="[iconName]"></i>
          </div>
        </div>
        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
          <router-link :to="nextAction"
          :class="{ disabled: disabledAction }">
            <span class="font-semibold text-lg ml-2"
            :class="{'text-blueGray-300': disabledAction,
          'text-blueGray-700': !disabledAction}">
            {{ title }}
            </span>
          </router-link>
          <p class="text-sm text-blueGray-500 mt-2">
            <span class="whitespace-wrap">{{ description }}</span>
          </p>
        </div>        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "card-stats",
  props: {
    title: {
      type: String,      
    },
    iconName: {
      type: String,
      default: "fas fa-chart-bar",
    },
    iconColor: {
      type: String,
      default: "bg-red-500",
    },
    description: {
      type: String,      
    },
    nextAction: {
      type: String,
      default: "/admin/evaluation/select"
    },
    disabledAction: {
      type: Boolean,
      default: false
    }
  },
};
</script>
