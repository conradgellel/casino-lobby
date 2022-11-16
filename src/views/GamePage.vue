<template>
  <div class="game-wrapper" v-bind:style="{ backgroundImage: 'url(' + game.game_background + ')' }">
    <div class="container-fluid">
      <div class="game-content">
        <h1 class="mb-4">{{ game.title }}</h1>
        <div v-html="game.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import gamesData from '@/assets/games.json'

export default {
  computed: {
    gameAlias() {
      return this.$route.params.id
    },
    game() {
      return gamesData[this.gameAlias]
    }
  }
}
</script>

<style>
.game-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #FFF;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.game-wrapper:after {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000000;
  opacity: 0.6;
}

.game-content {
  position: relative;
  z-index: 1;
}
</style>