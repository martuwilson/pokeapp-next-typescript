import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@nextui-org/react'
import {Layout} from '../components/layouts'
import { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '@/api'
import { PokemonResponse } from '@/interfaces'


const Home: NextPage = (props) => {

  console.log({props})

  return (

    <>
      <Layout title='Listado de Pokemons'>

        <ul>
          <li>Pokemon</li>0
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
        </ul>

      </Layout>
    </>

  )

}

export const getStaticProps: GetStaticProps = async (context) => {

  const {data} = await pokeApi.get<PokemonResponse>('/pokemon?limit=151')
  console.log(data)

  return {
    props: {
      pokemons: data.results
    }
  }

}

export default Home