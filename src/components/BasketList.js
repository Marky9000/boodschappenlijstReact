import React from 'react'

import Counter from '../components/Counter'

function BasketList(props) {
const amount = props.amount
    const inCart = props.cartItems;
    const cartList = inCart.map(item => {
        return <div className="listBasket">{item}<span className="counter"><Counter/></span>   
        </div>   
    })
    return (
        <li>{cartList}</li>
  )
}



export default BasketList