import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key } from "react";

export interface PokemonResponse {
    name: string;
    count:    number;
    next?:     string;
    previous?: string;
    results:  SmallPokemon[];
}

export interface SmallPokemon{
    img: string;
    image: string | StaticImport;
    id: Key | null | undefined;
    name: string;
    url:  string;
}
