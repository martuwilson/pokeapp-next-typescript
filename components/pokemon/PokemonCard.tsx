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

  return (
    <>
    <Card key={pokemon.id} isHoverable>
          <CardBody className="flex flex-col items-center justify-center h-full"> 
            <Image src={  pokemon.img || '/no-image.png' } alt={pokemon.name} width={200} height={200} className="mx-auto"/>
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