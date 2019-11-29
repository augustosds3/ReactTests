import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {

   state = {
       ingredients: {
           salad: 1,
           bacon: 2,
           cheese: 3,
           meat: 4
       }
   }

    render(){
        return (
            <Auxiliar>
                <Burger ingredients = {this.state.ingredients}/>
                <div>Build Controls</div>
            </Auxiliar>
        );
    }


}
export default BurgerBuilder;