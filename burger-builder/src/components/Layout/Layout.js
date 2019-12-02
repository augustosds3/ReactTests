import React from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar';

const Layout = (props) => (
    <Auxiliar>
        <Toolbar/>
        <div>Toolbar, SideDrawer, BackDrop</div>
        <main className = {classes.Content}>
            {props.children}
        </main>
    </Auxiliar>
);


export default Layout;