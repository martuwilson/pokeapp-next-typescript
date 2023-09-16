import React from 'react'
import { Layout } from '@/components/layouts'
import { useRouter } from 'next/router'


interface Props{
    pokemon: any;
}

const PokemonPage = () => {

    const router = useRouter();

  return (
    <Layout>
        <h1>heyhey</h1>
    </Layout>
  )
}

export default PokemonPage