/**
 * bu component;
 * 4 buton gösterecek
 * aktif buton farklı renkte olacak
 * tıklayınca filtreleme değişecek
 */

import type { FilterButtonProps } from '../types';

export const FilterButtons = ({
    categories,
    activeCategory,
    onFilterChange,
}: FilterButtonProps) => {
    return (
        <div className="flex justify-center gap-4 mb-12">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onFilterChange(category)}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${activeCategory === category ? 'bg-orange-600 text-white shadow-lg scale-105' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};
