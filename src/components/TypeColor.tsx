export const TypeColor = ({ type }: { type: string | null }) => {
    const textWhite = 'text-white';
    const textBlack = 'text-black';

    let bgColor;
    let textColor;

    switch (type) {
        case 'Grass':
            bgColor = 'bg-green-400';
            break;
        case 'Poison':
            bgColor = 'bg-purple-500';
            textColor = textWhite;
            break;
        case 'Fire':
            bgColor = 'bg-orange-500';
            textColor = textWhite;
            break;
        case 'Flying':
            bgColor = 'bg-sky-500';
            textColor = textWhite;
            break;
        case 'Water':
            bgColor = 'bg-blue-500';
            textColor = textWhite;
            break;
        case 'Bug':
            bgColor = 'bg-lime-700';
            textColor = textWhite;
            break;
        case 'Normal':
            bgColor = 'bg-gray-500';
            textColor = textWhite;
            break;
        case 'Electric':
            bgColor = 'bg-yellow-400';
            textColor = textBlack;
            break;
        case 'Ground':
            bgColor = 'bg-yellow-900';
            textColor = textWhite;
            break;
        case 'Fairy':
            bgColor = 'bg-pink-300';
            textColor = textBlack;
            break;
        case 'Fighting':
            bgColor = 'bg-red-600';
            textColor = textWhite;
            break;
        case 'Psychic':
            bgColor = 'bg-pink-400';
            textColor = textWhite;
            break;
        case 'Rock':
            bgColor = 'bg-yellow-700';
            textColor = textWhite;
            break;
        case 'Steel':
            bgColor = 'bg-zinc-400';
            textColor = textBlack;
            break;
        case 'Ice':
            bgColor = 'bg-cyan-400';
            textColor = textBlack;
            break;
        case 'Ghost':
            bgColor = 'bg-violet-900';
            textColor = textWhite;
            break;
        case 'Dragon':
            bgColor = 'bg-fuchsia-800';
            textColor = textWhite;
            break;
        default:
            bgColor = 'bg-neutral-50';
    }

    return (
        <span
            className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ${bgColor} ${textColor}`}
        >
            {type}
        </span>
    );
};
