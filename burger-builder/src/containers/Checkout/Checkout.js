import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

import { connect } from 'react-redux';

class Checkout extends Component {

    state = {
        totalPrice: 0
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <React.Fragment>
                <CheckoutSummary ingredients={this.props.ings}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route path={this.props.match.path + '/contact-data'}
                    component={ContactData} />
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
};


export default connect(mapStateToProps)(Checkout);