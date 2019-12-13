import React, { Component } from 'react';
import Auxiliar from '../Auxiliar';
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerOpenHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        })
    }

    render() {
        return (
            <Auxiliar>
                <Toolbar openSideDrawer={this.sideDrawerOpenHandler}
                isAuth = {this.props.isAuthenticated} />
                <SideDrawer closed={this.sideDrawerCloseHandler}
                    open={this.state.showSideDrawer} 
                    isAuth = {this.props.isAuthenticated}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliar>
        )
    }

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
}

export default connect(mapStateToProps)(Layout);