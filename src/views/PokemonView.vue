<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este Pokemón?</h1>
    <PokemonPictureComponent :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptionsComponent :pokemons="pokemonsArr" @selection="checkAnswer($event)" />

    <template v-if="showAnswer">
      <h2>{{ message }}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </template>
  </div>
</template>

<script setup>
import usePokemonApiComposable from "@/composables/usePokemonApiComposable";
import PokemonPictureComponent from "@/components/PokemonPictureComponent.vue";
import PokemonOptionsComponent from "@/components/PokemonOptionsComponent.vue";
import { onMounted, ref } from "vue";

const { getPokemonsOptions } = usePokemonApiComposable();
let pokemonsArr = ref([]);
let pokemon = ref(null);
let showPokemon = ref(false);
let message = ref("");
let showAnswer = ref(false);

async function mixPokemonsArray() {
  pokemonsArr.value = await getPokemonsOptions();
  console.log(pokemonsArr.value);

  const rndInt = Math.floor(Math.random() * 4);
  pokemon.value = pokemonsArr.value[rndInt];
  console.log(pokemon.value);
}

function checkAnswer(pokemonId) {
  this.showPokemon = true;
  this.showAnswer = true;

  if (pokemonId === this.pokemon.id) {
    this.message = `Correcto!!!, El pokemón es ${this.pokemon.name}`;
  } else {
    this.message = `Oooopppss, El pokemón era ${this.pokemon.name}`;
  }
}

function newGame() {
  showPokemon.value = false;
  showAnswer.value = false;
  pokemonsArr.value = [];
  pokemon.value = null;
  message.value = "";
  mixPokemonsArray();
}

onMounted(() => {
  mixPokemonsArray();
});
</script>
