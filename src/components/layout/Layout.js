import React from 'react';
import Auxilary from '../../hoc/Auxilary';
import classes from './Layout.module.css'

const Layout = props =>(
    <Auxilary>
        <div>Toolbar, Side Drawer, Back Drop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxilary>
);

export default Layout;