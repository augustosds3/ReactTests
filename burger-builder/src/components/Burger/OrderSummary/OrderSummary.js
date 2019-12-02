import React, { Component } from 'react';
import Auxiliar from '../../../hoc/Auxiliar';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {

    //Could be a functional component because is wrapped by an component
    //that implement ComponentShouldUpdate

    componentWillUpdate(){
        console.log('[OrderSummary] Update')
    }
    
    render(){
        
        const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
            return <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}
                </span>:  {this.props.ingredients[igKey]}
            </li>
        })
    

        return (
            <Auxiliar>
                <h3>Your Order</h3>
                <p>Your selected ingredients are:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
    
            </Auxiliar>
        )
    }

}

export default OrderSummary;