import React from 'react';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';


const Main = () => {
    return (
        <React.Fragment>
            <Header />
            <Home />
            <Footer />
        </React.Fragment>
    );
}

export default Main;