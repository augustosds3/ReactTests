import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../../src/axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler';
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data });
            }).catch(error => {
                this.setState({error: true});
            })
    }


    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
        this.updatePurchaseState(updateIngredients);

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
        this.updatePurchaseState(updateIngredients);

    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice, //Calculate price on server
            customer: {
                name: 'Augusto',
                addres: {
                    street: 'bto',
                    zipCode: '214345',
                    country: 'BR'
                },
                email: 'abce@feaf.com'
            },
            deliveryMethod: 'fullFast'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchasing: false });
            }).catch(error => {
                this.setState({ loading: false, purchasing: false });
                console.log(error);
            });
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map((igKey) => {
            return ingredients[igKey];
        }
        ).reduce((sum, el) => {
            return sum + el;
        }, 0);

        this.setState({ purchasabe: sum > 0 });

    }


    render() {

        let orderSummary = null

        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let burguer = this.state.error ? 
        <p>Ingredients can't be loaded!</p> : <Spinner />;

        if (this.state.ingredients) {
            burguer = (
                <Auxiliar>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasabe}
                        ordered={this.purchaseHandler} />
                </Auxiliar>

            );

            orderSummary = <OrderSummary ingredients={this.state.ingredients}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.state.totalPrice} />;
        }        

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <Auxiliar>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burguer}
            </Auxiliar>

        );
    }


}
export default withErrorHandler(BurgerBuilder, axios);