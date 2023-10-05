import {useState, useEffect} from 'react'

import { Layout } from '@/components/layouts'
import React from 'react'

import { NoFavorites } from '@/components/ui';
import { localFavorites } from '@/utils';

import {Card, CardFooter, Image, Button} from "@nextui-org/react";

const FavoritePage = () => {


  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])
  

  return (
    <Layout title='Poke-Favoritos'>

      {
        favoritePokemons.length === 0 ? (<NoFavorites />) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2 justify-start">
    {
        favoritePokemons.map((id) => (
          <Card key={id} isHoverable className='mt-2'>
          <div className="flex items-center justify-center h-200">
              <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  alt={`pokemon-${id}`}
                  width={200}
                  height={200}
                  className="mx-auto"
              />
          </div>
      </Card>
        ))
    }
</div>

        )
      }
      

    </Layout>
  )
}

export default FavoritePage