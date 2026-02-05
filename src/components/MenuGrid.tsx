/**
 * Bu component
 * filtrelenmiş yemekleri alacak
 * her biri için MenuCard oluşturacak
 * Grid layout ile düzenli gösterecek
 * responsive olacak
 */

import { MenuItem } from '../types';
import { MenuCard } from './MenuCard';

interface MenuGridProps {
    items: MenuItem[];
}

export const MenuGrid = ({ items }: MenuGridProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            {items.map((item) => (
                <MenuCard key={item.id} item={item} />
            ))}
        </div>
    );
};
