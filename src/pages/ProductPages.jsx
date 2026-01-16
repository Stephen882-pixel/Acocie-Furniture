import React, { useState, useMemo } from "react";
import ProductCard from "../components/common/ProductCard";
import { allProducts,categories } from "../data/mockData";
import { Search,SlidersHorizontal } from "lucide-react";

const ProductsPage = () => {
    const [ searchItem, setSearchItem ] = useState('');
    const [ selectedCategory, setSelectedCategory ] = useState('all');
    const [ sortBy, setSortBy ] = useState('featured');
    const [ priceRange, setPriceRange ] =  useState([0,2000]);
    const [ showFilters,setFilters ] = useState(false);

    const filteredProducts = useMemo(() => {
        let filtered = [...allProducts];

        if(searchItem){
            filtered = filtered.filter(product => 
                product.name.toLowerCase().includes(searchItem.toLowerCase())
            );
        }

        if(selectedCategory !== 'all'){
            filtered = filtered.filter(product => product.category === selectedCategory);
        }

        filtered = filtered.filter(
            product => product.price >= priceRange[0] && product.price <= selectedCategory[1]
        );

        
    })
}