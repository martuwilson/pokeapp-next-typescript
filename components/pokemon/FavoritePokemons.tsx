import {Card, Image} from "@nextui-org/react";
import { FC } from "react";


interface Props {
    pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({pokemons}) => {


    return(
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2 justify-start">
            {
              pokemons.map((id) => (
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