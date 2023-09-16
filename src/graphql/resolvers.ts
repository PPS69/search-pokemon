import { GET_POKEMON, GET_POKEMONS } from './queries';

const uri = process.env.POKEMON_API as string;

export const resolvers = {
    Query: {
        pokemon: async (_parent: any, args: { name: string }) => {
            return await fetch(uri, {
                method: 'POST',
                body: JSON.stringify({
                    query: GET_POKEMON,
                    variables: {
                        name: args.name,
                    },
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => data.data.pokemon);
        },

        pokemons: async (_parent: any, args: { first: number }) => {
            return await fetch(uri, {
                method: 'POST',
                body: JSON.stringify({
                    query: GET_POKEMONS,
                    variables: {
                        first: args.first,
                    },
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => data.data.pokemons);
        },
    },
};
