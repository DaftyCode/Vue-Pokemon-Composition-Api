import pokemonApi from '@/api/pokemonApi'

const usePokemonApiComposable = () => {
  const pokemonsArr = Array.from({ length: 650 }, (_, i) => i + 1)

  const mixedPokemons = pokemonsArr.sort(() => Math.random() - 0.5)

  const getPokemonsNames = async ([a, b, c, d] = []) => {
    const promiseArr = [
      pokemonApi.get(`/${a}`),
      pokemonApi.get(`/${b}`),
      pokemonApi.get(`/${c}`),
      pokemonApi.get(`/${d}`)
    ]

    const [p1, p2, p3, p4] = await Promise.all(promiseArr)
    return [
      { name: p1?.data?.name, id: p1?.data?.id },
      { name: p2?.data?.name, id: p2?.data?.id },
      { name: p3?.data?.name, id: p3?.data?.id },
      { name: p4?.data?.name, id: p4?.data?.id }
    ]
  }

  const getPokemonsOptions = async () => {
    const pokemons = await getPokemonsNames(mixedPokemons.splice(0, 4))
    return pokemons
  }

  return {
    getPokemonsOptions
  }
}

export default usePokemonApiComposable
