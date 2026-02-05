//bu dosyada tüm typscript tip tanımlamaları olacak
//1-Category
export type Category = 'All' | 'Korea' | 'Japan' | 'China';

//2-MenuItem->interface
export interface MenuItem {
    id: number;
    name: string;
    category: Exclude<Category, 'All'>;
    price: number;
    description: string;
    image: string;
}

//3-FilterButtonProps->interface
export interface FilterButtonProps {
    categories: Category[];
    activeCategory: Category;
    onFilterChange: (category: Category) => void;
}
