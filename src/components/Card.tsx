import Image from 'next/image';
import { TypeColor } from './TypeColor';

type Card = {
    src: string;
    name: string;
    number?: string;
    types?: (string | null)[];
    hover?: boolean;
};

export const Card = ({ src, name, number, types, hover }: Card) => {
    let group = '';

    if (hover) {
        group = 'group';
    }
    return (
        <div
            className={`${group} max-w-sm rounded overflow-hidden shadow-lg bg-white`}
        >
            <Image
                className='w-auto h-64'
                src={src}
                alt={name}
                width={300}
                height={300}
            />
            <div className='group-hover:bg-slate-500 flex flex-col items-center justify-center px-6 py-4 bg-slate-400'>
                <div className='font-bold text-xl mb-2'>
                    {name} <span className='font-light'>#{number}</span>
                </div>
                <div className='flex px-6 py-2 gap-4'>
                    {types?.map((type, index) => {
                        return <TypeColor key={index} type={type} />;
                    })}
                </div>
            </div>
        </div>
    );
};
