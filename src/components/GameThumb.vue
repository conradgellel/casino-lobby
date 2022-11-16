<template>
  <div class="game">
    <a :href="`game/${game.slug}`">
      <div class="img">
        <img :src="game.game_thumbnail" />
      </div>
      <div class="info mt-2">
        <h5>{{ game.title }}</h5>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    game: {
      required: true
    }
  }
}
</script>

<style>
.game img {
  width: 100%;
}

.game a {
  text-decoration: none;
}
</style>