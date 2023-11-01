import { useState } from 'react'; 
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import confetti from 'canvas-confetti';

import { Layout } from '@/components/layouts';
import { pokeApi } from '@/api';
import { Pokemon,PokemonResponse } from '@/interfaces';
import Image from 'next/image';
import { localFavorites } from '@/utils';


interface Props{
    pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {

    const [isFavorite, setIsFavorite] = useState(localFavorites.existFavorite(pokemon.id));

    const onClickFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id);
        setIsFavorite(!isFavorite);

        if(!isFavorite){
            confetti({
                particleCount: 100,
                spread: 70,
                origin: {
                    y: 0.6
                }
            })
        }
    }

    

  return (
    <Layout title={pokemon.name}>
       <div style={{ marginTop: '5px'}}>
            <div className="w-auto bg-gradient-to-r from-blue-500 to-purple-500">
                <div className="p-4 border rounded ">
                    <div className="mb-4">
                        <Image
                            src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                            alt={pokemon.name}
                            width={200}
                            height={200}
                            className="mx-auto"
                        />
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold capitalize">{pokemon.name}</h1>
                        <button
                        className="bg-gradient-to-r from-green-500 to-yellow-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 mt-4"
                        onClick={onClickFavorite}
                        >
                            {!isFavorite ? 'Agregar a favoritos' : 'Quitar de favoritos'}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<PokemonResponse>('/pokemon?limit=151');
    const pokemonNames: string[] = data.results.map( pokemon => pokemon.name );
  
  
    return {
      paths: pokemonNames.map( name => ({
        params: { name }
      })),
      fallback: false
    }
  }
  
  
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as { name: string };
  
    try {
     
      const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);
  
      
      const pokemon = {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
      
      };
  
      return {
        props: {
          pokemon,
        },
      };
    } catch (error) {
      
      return {
        notFound: true,
      };
    }
  };


export default PokemonByNamePage