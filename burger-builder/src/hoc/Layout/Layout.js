import React, { Component } from 'react';
import Auxiliar from '../Auxiliar';
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () =>{
        this.setState({showSideDrawer: false});
    }

    sideDrawerOpenHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer };
        })
    }

    render() {
        return (
            <Auxiliar>
                <Toolbar openSideDrawer = {this.sideDrawerOpenHandler} />
                <SideDrawer closed = {this.sideDrawerCloseHandler}
                open = {this.state.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliar>
        )
    }

}

export default Layout;