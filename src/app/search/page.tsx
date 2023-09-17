'use client';

import { Card } from '@/components/Card';
import { TypeColor } from '@/components/TypeColor';
import type { GetPokemonQuery } from '@/graphql/pokemonGraphql';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';

const fetcher = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
};

export default function Search() {
    const search = useSearchParams();
    const searchQuery = search.get('q');
    const encodeSearchQuery = encodeURI(searchQuery || '');

    const { data, isLoading, error } = useSWR<GetPokemonQuery>(
        `/api/search?q=${encodeSearchQuery}`,
        fetcher
    );

    if (isLoading)
        return (
            <div className='text-lg min-h-screen flex flex-col justify-center items-center bg-slate-600 font-semibold'>
                Loading...
            </div>
        );

    if (error)
        return (
            <div className='text-lg min-h-screen flex flex-col justify-center items-center bg-slate-600 font-semibold'>
                Something went wrong
                <Link href={'/'}>
                    <p className='p-2 text-white hover:text-blue-500'>
                        Go To Homepage
                    </p>
                </Link>
            </div>
        );

    const pokemon = data?.pokemon;

    if (!pokemon)
        return (
            <div className='text-lg min-h-screen flex flex-col justify-center items-center bg-slate-600 font-semibold'>
                Data not found
                <Link href={'/'}>
                    <p className='p-2 text-white hover:text-blue-500'>
                        Go To Homepage
                    </p>
                </Link>
            </div>
        );
    return (
        <div className='md:px-10 min-h-screen bg-slate-600'>
            <h1 className='flex justify-center p-2 font-bold md:text-lg text-xs'>
                Seach result for <q>{searchQuery}</q>
            </h1>
            <Link href={'/'}>
                <p className='flex justify-center p-2 hover:text-blue-500'>
                    Go To Homepage
                </p>
            </Link>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:px-8 gap-6'>
                <div className='p-2 md:p-8 rounded shadow-lg bg-slate-400 text-center'>
                    <Card
                        src={pokemon.image ?? ''}
                        name={pokemon.name ?? ''}
                        number={pokemon?.number ?? ''}
                        types={pokemon?.types ?? []}
                    />
                    <p className='p-2 my-4 bg-neutral-50 rounded'>
                        {pokemon.classification}
                    </p>
                </div>
                <div className='p-2 md:p-8 rounded shadow-lg bg-slate-400 text-center'>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <label className='flex flex-row font-semibold'>
                                weight
                            </label>
                            <p className='p-2 my-2 bg-neutral-50 rounded lg:whitespace-nowrap'>
                                minimum {pokemon.weight?.minimum}
                            </p>
                            <p className='p-2 my-2 bg-neutral-50 rounded lg:whitespace-nowrap'>
                                maximum {pokemon.weight?.maximum}
                            </p>
                        </div>
                        <div>
                            <label className='flex flex-row font-semibold'>
                                height
                            </label>
                            <p className='p-2 my-2 bg-neutral-50 rounded lg:whitespace-nowrap'>
                                minimum {pokemon.height?.minimum}
                            </p>
                            <p className='p-2 my-2 bg-neutral-50 rounded lg:whitespace-nowrap'>
                                maximum {pokemon.height?.maximum}
                            </p>
                        </div>
                    </div>

                    <label className='mt-2 flex flex-row font-semibold'>
                        resistant
                    </label>
                    <div className='grid grid-cols-2 gap-2'>
                        {pokemon.resistant?.map((resistant, index) => {
                            return <TypeColor key={index} type={resistant} />;
                        })}
                    </div>

                    <label className='mt-2 flex flex-row font-semibold'>
                        weaknesses
                    </label>
                    <div className='grid grid-cols-2 gap-2'>
                        {pokemon.weaknesses?.map((weakness, index) => {
                            return <TypeColor key={index} type={weakness} />;
                        })}
                    </div>
                    <ol className='mt-2 py-2 grid grid-cols-3 gap-2'>
                        <li>
                            <label className='font-semibold'>fleeRate</label>
                            <p className='p-1 bg-neutral-50 rounded'>
                                {pokemon.fleeRate}
                            </p>
                        </li>
                        <li>
                            <label className='font-semibold'>maxCP</label>
                            <p className='p-1 bg-neutral-50 rounded'>
                                {' '}
                                {pokemon.maxCP}
                            </p>
                        </li>
                        <li>
                            <label className='font-semibold'>maxHP</label>
                            <p className='p-1 bg-neutral-50 rounded'>
                                {pokemon.maxHP}
                            </p>
                        </li>
                    </ol>
                </div>
                <div className='md:p-4 rounded shadow-lg bg-slate-400 overflow-x-auto'>
                    <table className='mb-4 min-w-full table-auto border-collapse bg-slate-200 rounded '>
                        <caption className='font-semibold'>
                            Fast Attacks
                        </caption>
                        <thead className='bg-slate-500'>
                            <tr>
                                <th
                                    scope='col'
                                    className='px-4 py-2 rounded-tl font-semibold'
                                >
                                    damage
                                </th>
                                <th
                                    scope='col'
                                    className='px-6 py-2 font-semibold'
                                >
                                    name
                                </th>
                                <th
                                    scope='col'
                                    className='px-4 py-2 rounded-tr font-semibold'
                                >
                                    type
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {pokemon.attacks?.fast?.map((attack) => {
                                return (
                                    <tr key={attack?.name}>
                                        <td className='px-5 py-2'>
                                            {attack?.damage}
                                        </td>
                                        <td className='px-5 py-2'>
                                            {attack?.name}
                                        </td>
                                        <td className='px-5 py-2'>
                                            <TypeColor
                                                type={attack?.type ?? ''}
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <table className='min-w-full table-auto border-collapse bg-slate-200 rounded'>
                        <caption className='font-semibold'>
                            Special Attacks
                        </caption>
                        <thead className='bg-slate-500'>
                            <tr>
                                <th
                                    scope='col'
                                    className='px-4 py-2 rounded-tl font-semibold'
                                >
                                    damage
                                </th>
                                <th
                                    scope='col'
                                    className='px-6 py-2 font-semibold'
                                >
                                    name
                                </th>
                                <th
                                    scope='col'
                                    className='px-4 py-2 rounded-tr font-semibold'
                                >
                                    type
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {pokemon.attacks?.special?.map((attack) => {
                                return (
                                    <tr key={attack?.name}>
                                        <td className='px-5 py-2'>
                                            {attack?.damage}
                                        </td>
                                        <td className='px-5 py-2'>
                                            {attack?.name}
                                        </td>
                                        <td className='px-5 py-2'>
                                            <TypeColor
                                                type={attack?.type ?? ''}
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='md:mt-4 md:mb-6  col-span-1 lg:col-span-3 rounded shadow-lg bg-slate-400'>
                    <p className='text-center p-2 font-semibold'>Evolution</p>
                    {pokemon.evolutions == null ? (
                        <p className='my-10 flex justify-center'>
                            This Pokémon does not evolve.
                        </p>
                    ) : (
                        <div className='p-2 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {pokemon.evolutions?.map((evolution) => {
                                return (
                                    <Link
                                        key={evolution?.id}
                                        href={`/search?q=${evolution?.name}`}
                                    >
                                        <Card
                                            src={evolution?.image ?? ''}
                                            name={evolution?.name ?? ''}
                                            number={evolution?.number ?? ''}
                                            hover
                                        />
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
