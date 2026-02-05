//Filtereleme mantığını yönetecek bir custom hook yazacaz.
import { useState, useMemo } from 'react';
import type { MenuItem, Category } from '../types';


export const useMenuFilter = (items: MenuItem[]){
    //active category state'i->hangi kategori seçili
    const [activeCategory,setActiveCategory]= useState<Category>('All')
    //filtered items->useMemo
    const filteredItems = useMemo(()=>{
        if (activeCategory === 'All')return items;
        return items.filter(item=>item.category === activeCategory);
    },[items,activeCategory]);
    /**bu hook'tan ne dönecek
     * ->filtrelenmiş yemekler
     * şuanki kategori
     * kategoriyi değiştirme fonksiyonu
     * return->obje döndürür
    */
   return{
    filteredItems,
    activeCategory,
    setActiveCategory
   }


}
