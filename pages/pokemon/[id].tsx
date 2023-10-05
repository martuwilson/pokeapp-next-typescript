import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import { Layout } from '@/components/layouts';
import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';
import Image from 'next/image';
import { localFavorites } from '@/utils';


interface Props{
    pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    /* console.log(pokemon) */

    const onClickFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id)
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
                            Guardar en favoritos
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (context) => {

    const pokemon151 = [...Array(151)].map( (value, index) => `${index + 1}`)
    

  
    return {
        paths:pokemon151.map( id => (
            {
                params: {id}
            }
        ))
        ,
        fallback: false
    }
  
}

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
    const {id} = params as {id: string};
    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
    return {
        props: {
            pokemon: data
        }
    }
}


export default PokemonPage