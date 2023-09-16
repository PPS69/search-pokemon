'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        const encodeSearchQuery = encodeURI(searchQuery);
        router.push(`/search?q=${encodeSearchQuery}`);
    };

    return (
        <form onSubmit={handleSearch}>
            <div className='flex'>
                <input
                    type='search'
                    className='block w-full py-2 pl-6 pr-2 text-gray-900 border border-gray-300 rounded-tl-full rounded-bl-full bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder='Enter Pokémon Name'
                    required
                />
                <button
                    type='submit'
                    className='text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-tr-full rounded-br-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                    Search
                </button>
            </div>
        </form>
    );
};
