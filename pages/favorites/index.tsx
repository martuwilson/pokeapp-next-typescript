import {useState, useEffect} from 'react'

import { Layout } from '@/components/layouts'
import React from 'react'

import { NoFavorites } from '@/components/ui';
import { localFavorites } from '@/utils';

import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import { FavoritePokemons } from '@/components/pokemon/FavoritePokemons';

const FavoritePage = () => {


  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])
  

  return (
    <Layout title='Poke-Favoritos'>

      {
        favoritePokemons.length === 0 ? (<NoFavorites />) : (
          <FavoritePokemons pokemons={favoritePokemons}/>
        )
      }
      

    </Layout>
  )
}

export default FavoritePage