// import { gql } from '@apollo/client';
import { gql } from 'graphql-request';

export const GET_POKEMON = gql`
    query GetPokemon($name: String) {
        pokemon(name: $name) {
            id
            number
            name
            weight {
                minimum
                maximum
            }
            height {
                minimum
                maximum
            }
            classification
            types
            resistant
            weaknesses
            fleeRate
            maxCP
            maxHP
            image
            attacks {
                fast {
                    name
                    type
                    damage
                }
                special {
                    name
                    type
                    damage
                }
            }
            evolutions {
                id
                number
                name
                classification
                types
                resistant
                weaknesses
                fleeRate
                maxCP
                maxHP
                image
            }
        }
    }
`;
export const GET_POKEMONS = gql`
    query GetPokemons($first: Int!) {
        pokemons(first: $first) {
            id
            number
            name
            types
            image
        }
    }
`;
