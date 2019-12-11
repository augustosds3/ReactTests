import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../../src/axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler';
import { connect } from 'react-redux';
import * as burgerBuilderActions from '../../store/actions/index';

class BurgerBuilder extends Component {

    state = {
        totalPrice: 4,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        console.log(this.props);
        // axios.get('/ingredients.json')
        //     .then(response => {
        //         this.setState({ ingredients: response.data });
        //     }).catch(error => {
        //         this.setState({error: true});
        //     })
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
            this.props.history.push('/checkout');
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map((igKey) => {
            return ingredients[igKey];
        }
        ).reduce((sum, el) => {
            return sum + el;
        }, 0);

        return sum > 0;

    }


    render() {

        let orderSummary = null

        const disabledInfo = {
            ...this.props.ings
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let burguer = this.state.error ? 
        <p>Ingredients can't be loaded!</p> : <Spinner />;

        if (this.props.ings) {
            burguer = (
                <Auxiliar>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        price={this.props.price}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler} />
                </Auxiliar>

            );

            orderSummary = <OrderSummary ingredients={this.props.ings}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.props.price} />;
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

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))