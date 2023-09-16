export const typeDefs = `#graphql
    type Pokemon {
        id: ID!
        number: String
        name: String
        weight: Weight
        height: Height
        classification: String
        types: [String]
        resistant: [String]
        attacks: Attacks
        weaknesses: [String]
        fleeRate: Float
        maxCP: Float
        maxHP: Float
        image: String
        evolutions: [Evolution]
    }

    type Weight {
        minimum: String
        maximum: String
    }

    type Height {
        minimum: String
        maximum: String
    }
    

    type Attacks {
        fast: [Attack]
        special: [Attack]
    }

    type Attack {
        name: String
        type: String
        damage: Float
    }

    type Evolution {
        id: String
        number: String
        name: String
        weight: Weight
        height: Height
        classification: String
        types: [String]
        resistant: [String]
        attacks: Attacks
        weaknesses: [String]
        fleeRate: Float
        maxCP: Float
        maxHP: Float
        image: String
        evolutions: [Evolution]
    }

    type Query {
        pokemon(id: String, name: String): Pokemon
        pokemons(first: Int!): [Pokemon]
    }
`;
