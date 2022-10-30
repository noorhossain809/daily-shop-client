import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import React from 'react';
import { useLocation } from 'react-router-dom';

// type BoxProps = {
//     children:; // 👈️ type children
//   };
const DefaultLayout = ({children}: any) => {
    const location = useLocation()
    return (
        <>
        {!location.pathname.includes('/dashboard') &&  <Header />}
        {children}
        {!location.pathname.includes('/dashboard') && <Footer />}
        </>
    );
};

export default DefaultLayout;