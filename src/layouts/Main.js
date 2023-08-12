import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Main = ({children}) => {
    return (
        <React.Fragment>
            <Navigation/>
            {children}
            <Footer/>
        </React.Fragment>
    );
};
export default Main;