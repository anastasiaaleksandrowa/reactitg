import React from 'react';

const CartPage = ({ cartItems, onUpdateQuantity }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return ( <
            div >
            <
            h2 > Shopping Cart < /h2> {
            cartItems.map(item => ( <
                div key = { item.id } >
                <
                h4 > { item.name } < /h4> <
                p > Price: $ { item.price } < /p> <
                input type = "number"
                value = { item.quantity }
                min = "1"
                onChange = {
                    (e) => onUpdateQuantity(item.id, e.target.value)
                }
                /> < /
                div >
            ))
        } <
        h3 > Grand Total: $ { totalPrice } < /h3>  <
        /div>
);
};

export default CartPage;