import React from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import classes from './Layout.module.css'

const Layout = (props) => (
    <Auxiliar>
        <div>Toolbar, SideDrawer, BackDrop</div>
        <main className = {classes.Content}>
            {props.children}
        </main>
    </Auxiliar>
);


export default Layout;