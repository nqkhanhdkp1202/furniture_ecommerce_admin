import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

const MainLayout = () => {
    const ScrollToTop = (props) => {
        const location = useLocation();
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [location]);
      
        return <>{props.children}</>
      };

    return (
        <React.Fragment>
            <ScrollToTop >
            <Header />
            <Sidebar />
            <Outlet />
            </ScrollToTop>
        </React.Fragment>
    )
}

export default MainLayout