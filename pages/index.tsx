import {Layout} from '../components/layouts'
import { NextPage, GetStaticProps} from 'next'
import { pokeApi } from '@/api'
import { PokemonResponse, SmallPokemon } from '@/interfaces'
import {PokemonCard} from '../components/pokemon/PokemonCard';

interface Props {
  pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = ({pokemons}) => {

  return (

    <>
      <Layout title='Listado de Pokemons'>
        
        <div className="grid grid-cols-3 gap-4 mt-5">
      {
        pokemons.map( pokemon => (
          <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          />

        ))
      }
        </div>
      </Layout>

    </>

  )

}

export const getStaticProps: GetStaticProps = async (context) => {

  const {data} = await pokeApi.get<PokemonResponse>('/pokemon?limit=151')
  console.log(data)

  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }) )

  return {
    props: {
      pokemons
    }
  }

}

export default Home