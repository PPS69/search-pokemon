import { Card } from '@/components/Card';
import { Search } from '@/components/Search';
import { graphqlClient } from '@/graphql/client';
import { GetPokemonsQuery } from '@/graphql/pokemonGraphql';
import { GET_POKEMONS } from '@/graphql/queries';
import Link from 'next/link';

export default async function Home() {
    const data: GetPokemonsQuery = await graphqlClient.request(GET_POKEMONS, {
        first: 151,
    });

    return (
        <main>
            <div className='flex h-20 bg-slate-600 justify-center items-center'>
                <Search />
            </div>
            <div className='grid lg:grid-cols-4 gap-6 p-14 md:grid-cols-3 sm:grid-cols-1 bg-slate-100'>
                {data?.pokemons?.map((pokemon) => (
                    <Link key={pokemon?.id} href={`/search?q=${pokemon?.name}`}>
                        <Card
                            src={pokemon?.image ?? ''}
                            name={pokemon?.name ?? ''}
                            number={pokemon?.number ?? ''}
                            types={pokemon?.types ?? []}
                            hover
                        />
                    </Link>
                ))}
            </div>
        </main>
    );
}
