import { Header } from './components/Header';

import { MenuGrid } from './components/MenuGrid';
import { useMenuFilter } from './hooks/useMenuFilter';
import { menuItems } from './data/menuData';
import type { Category } from './types';
import { FilterButtons } from './components/FilterButtons';

//filtre butonları için kategori listesi
const categories: Category[] = ['All', 'Korea', 'Japan', 'China'];

function App() {
    const { filteredItems, activeCategory, setActiveCategory } = useMenuFilter(menuItems);

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
            <Header />
            <FilterButtons
                categories={categories}
                activeCategory={activeCategory}
                onFilterChange={setActiveCategory}
            />
            <MenuGrid items={filteredItems} />
        </div>
    );
}

export default App;
