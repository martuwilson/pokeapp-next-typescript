import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@nextui-org/react'
import {Layout} from '../components/layouts'
import { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '@/api'
import { PokemonResponse, SmallPokemon } from '@/interfaces'


interface Props {
  pokemons: SmallPokemon[]
}

//"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idw}.svg"




const Home: NextPage<Props> = ({pokemons}) => {

  console.log(pokemons)

  return (

    <>
      <Layout title='Listado de Pokemons'>

        <ul>
          {
            pokemons.map(poke => (
              <li key={poke.id}>
                #{poke.id} - {poke.name}
              </li>
            ))
          }
        </ul>

      </Layout>
    </>

  )

}

export const getStaticProps: GetStaticProps = async (context) => {

  const {data} = await pokeApi.get<PokemonResponse>('/pokemon?limit=151')
  console.log(data)

  const pokemons: SmallPokemon[] = data.results.map((poke, index) => ({
    id: index + 1,
    name: poke.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  })
  )

  return {
    props: {
      pokemons
    }
  }

}

export default Home