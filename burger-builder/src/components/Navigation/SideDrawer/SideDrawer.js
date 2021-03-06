import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Auxiliary from '../../../hoc/Auxiliar';
import Backdrop from '../../UI/BackDrop/BackDrop'

const SideDrawer = (props) => {
    
    let attachedClasses = [classes.SideDrawer, classes.Closed];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <Auxiliary>
            <Backdrop show = {props.open} clicked = {props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuthenticated = {props.isAuth}/>
                </nav>
            </div>
        </Auxiliary>
    );

}

export default SideDrawer;