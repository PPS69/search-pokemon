import { graphqlClient } from '@/graphql/client';
import { GetPokemonQuery } from '@/graphql/pokemonGraphql';
import { GET_POKEMON } from '@/graphql/queries';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    try {
        const name = searchParams.get('q');
        const data: GetPokemonQuery = await graphqlClient.request(GET_POKEMON, {
            name,
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
