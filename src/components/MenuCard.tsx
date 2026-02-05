/**
 * bu component->tek bir yemek kartı;
 * yemek resmi
 * yemek ismi
 * fiyat
 * açıklama
 */

import type { MenuItem } from '../types';

interface MenuCardProps {
    //Neden interface? MenuItem type'ı componente props olarak geçiyoruz. Props her zaman obje olmalı
    item: MenuItem;
}

export const MenuCard = ({ item }: MenuCardProps) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full font-bold shadow-lg">
                    {item.price}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
        </div>
    );
};
