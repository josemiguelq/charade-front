<template>
    <div class="flex flex-wrap">
        <div class="w-full lg:w-8/12 px-4">
            <NewPatientCard />
        </div>
    </div>
</template>
<script>
import NewPatientCard from "@/components/Cards/NewPatientCard.vue";
// import CardProfile from "@/components/Cards/CardProfile.vue";

export default {
  components: {
    NewPatientCard,
    // CardProfile,
  },
};
</script>
