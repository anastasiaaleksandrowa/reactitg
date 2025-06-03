import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import CartPage from './pages/CartPage';

const App = () => {
        const [cartItems, setCartItems] = useState([]);

        const products = [
            { id: 1, name: 'T-Shirt', size: 'M', price: 20 },
            { id: 2, name: 'Jeans', size: 'L', price: 40 },
            // Добавьте другие товары...
        ];

        const handleAddToCart = (product) => {
            setCartItems(prevItems => {
                const existingItem = prevItems.find(item => item.id === product.id);
                if (existingItem) {
                    return prevItems.map(item =>
                        item.id === product.id ? {...item, quantity: item.quantity + 1 } : item);
                }
                return [...prevItems, {...product, quantity: 1 }];
            });
        };

        const handleUpdateQuantity = (id, quantity) => {
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === id ? {...item, quantity: Number(quantity) } : item));
        };

        return ( <
                Router >
                <
                Header / >
                <
                Switch >
                <
                Route path = "/"
                exact component = {
                    () => ( < h1 > Welcome to the Store! < /h1>)} / >
                        <
                        Route path = "/catalog"
                        component = {
                            () => ( < Catalog products = { products }
                                onAddToCart = { handleAddToCart }
                                />)} / >
                                <
                                Route path = "/cart"
                                component = {
                                    () => ( < CartPage cartItems = { cartItems }
                                        onUpdateQuantity = { handleUpdateQuantity }
                                        />)} / >
                                        <
                                        /Switch> < /
                                        Router >
                                    );
                                };

                                export default App;