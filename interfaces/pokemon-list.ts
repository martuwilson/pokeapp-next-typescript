export interface PokemonResponse {
    count:    number;
    next?:     string;
    previous?: string;
    results:  SmallPokemon[];
}

export interface SmallPokemon{
    name: string;
    url:  string;
}
