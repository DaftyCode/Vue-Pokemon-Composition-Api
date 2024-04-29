<template>
  <div class="pokemon-container">
    <img :src="imgSrc" v-bind:class="getClass()" alt="pokemon" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      default: 4,
      required: true,
      validator(value) {
        return value >= 0 && value <= 800;
      },
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
  methods:{
    getClass(){
      return {
        'fade-in': this.showPokemon,
        'hidden-pokemon': !this.showPokemon
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.pokemon-container {
  height: var(--pokemon-wrapper-height);
  width: var(--pokemon-wrapper-width);
  max-width: 100%;
  background-size: cover;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 2rem;
  background-image: url('@/assets/images/background.jpg');
  background-position: center center;
  position: relative;

  img {
    position: absolute;
    top: 60px;
    left: 70px;
    height: var(--pokemon-height);
    max-width: 250px;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  }

  .hidden-pokemon {
    filter: brightness(0);
  }
}
</style>
