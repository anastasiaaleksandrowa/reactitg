import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const Catalog = ({ products, onAddToCart }) => {
    const [sizeFilter, setSizeFilter] = useState('');

    const filteredProducts = sizeFilter ? products.filter(p => p.size === sizeFilter) : products;

    return ( <
        div >
        <
        h2 > Catalog < /h2> <
        select onChange = {
            (e) => setSizeFilter(e.target.value) } >
        <
        option value = "" > All Sizes < /option> <
        option value = "S" > S < /option> <
        option value = "M" > M < /option> <
        option value = "L" > L < /option> <
        option value = "XS" > XS < /option> <
        /select> <
        ProductList products = { filteredProducts }
        onAddToCart = { onAddToCart }
        /> <
        /div>
    );
};

export default Catalog;