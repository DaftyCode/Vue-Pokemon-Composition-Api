<template>
  <div class="options-container" v-if="pokemons && pokemons.length > 0">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        <button
          @click="selectOption(pokemon.id)"
          :disabled="isDisabled"
          v-bind:class="getClass(pokemon.id)">{{ pokemon.name }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
      return {
        hit: null,
        selectedOption: null
      };
    },
    props: {
      pokemons: {
        type: Array,
        required: true,
      },
      goodOption: {
        type: Number,
        required: true,
      }
    },
    computed: {
      isDisabled() {
        return !!this.selectedOption;
      },
    },
    methods: {
      selectOption(pokemonId) {
        this.hit = pokemonId === this.goodOption;
        this.selectedOption = pokemonId;
        this.$emit('selection', pokemonId);
      },
      getClass(pokemonId) {
        return {
          'success': this.selectedOption && pokemonId === this.goodOption,
          'error': this.selectedOption && !this.hit && pokemonId !== this.goodOption
        };
      }
    }
  };
</script>

<style lang="scss" scoped>
.options-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 0.8rem;
      width: 250px;
      padding: 0;

      button {
        background-color: white;
        text-transform: capitalize;

        &.success{
          background-color: var(--success-color);
        }

        &.error{
          background-color: var(--error-color);
        }

        &.not:not([disabled]):hover {
          background-color: var(--button-hover-color);
        }
      }
    }
  }
}
</style>
