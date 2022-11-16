<template>
  <div class="col-sm-6 col-md-4 col-lg-3 mb-4" v-for="game in gamesList" :key="game[0]">
    <GameThumb :game="game" />
  </div>
  <div class="no-results" v-if="!gamesList || !gamesList.length">
    No results found
  </div>
</template>

<script>
import GameThumb from './GameThumb.vue'
import gamesData from '../assets/games.json'

export default {
  name: 'GamesSection',
  components: {
    GameThumb
  },
  data() {
    return {
      games: Object.values(gamesData)
    }
  },
  props: {
    gameTitle: String
  },
  computed: {
    gamesList() {
      if (!this.gameTitle) {
        return this.games
      } else {
        return this.games.filter(game => (game.title.toLowerCase().includes(this.gameTitle.toLowerCase())))
      }
    }
  }
}
</script>