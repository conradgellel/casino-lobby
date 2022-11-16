<template>
  <div class="container">
    <img class="mt-5 mb-5" alt="Premier Gaming" src="@/assets/premier-gaming-logo.png">

    <div class="row d-flex justify-content-center">
      <div class="col-5 mb-5">
        <input type="text" class="form-control" v-model="gameTitle" placeholder="Search filter">
      </div>
    </div>

    <div class="row">
      <GamesSection :gameTitle="gameTitle" />
    </div>
  </div>
</template>

<script>
import GamesSection from '@/components/GamesSection.vue';

export default {
  name: 'HomePage',
  components: {
    GamesSection
  },
  data() {
    return {
      gameTitle: ''
    }
  }
}
</script>