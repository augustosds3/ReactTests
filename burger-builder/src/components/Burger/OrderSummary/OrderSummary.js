import React from 'react';
import Auxiliar from '../../../hoc/Auxiliar';


const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
        return <li key = {igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}
            </span>:  {props.ingredients[igKey]}
        </li>
    })
    return (
        <Auxiliar>
            <h3>Your Order</h3>
            <p>Your selected ingredients are:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Auxiliar>
    )
}

export default OrderSummary;