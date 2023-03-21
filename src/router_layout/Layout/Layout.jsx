import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from "../../components/main_components/SiteHeader/Header";
import Footer from "../../components/main_components/footer/Footer";
import classes from './Layout.module.css'

const Layout = () => {
    return (
        <div className={classes.main}>
            <Header />
            <Outlet className={classes.content}/>
            <Footer />
        </div>
    );
};

export default Layout;