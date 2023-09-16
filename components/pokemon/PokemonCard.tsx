import { SmallPokemon } from '@/interfaces'
import React, { FC } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Card, CardBody, CardFooter, Button } from '@nextui-org/react'
import { useRouter } from 'next/router'


interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({pokemon}) => {

    const pokeRouter = useRouter();

    const onPokeClick = () => {

        pokeRouter.push(`/pokemon/${pokemon.id}`)

    };

    console.log(pokemon)

  return (
    <>
    <Card key={pokemon.id} isHoverable>
          <CardBody className="flex flex-col items-center justify-center h-full"> 
            <Image src={pokemon.image} alt={pokemon.name} width={100} height={50} className="mb-2" />
              <h2 className="text-2xl font-bold text-center">{pokemon.name.toUpperCase()}</h2>
          </CardBody>
          <CardFooter className='flex flex-col items-center justify-center'>
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" onClick={
                onPokeClick
            }>
            Ver más
            </Button>
          </CardFooter>
        </Card>
    </>
  )
}