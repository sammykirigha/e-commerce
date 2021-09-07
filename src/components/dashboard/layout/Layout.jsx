import React, { Children } from 'react'
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import './Layout.css';

const Layout = ({children}) => {
    return (
        <div className='main-layout'>
            <div className="nav-header">
                <Header />
            </div>
            <div className="container">
                <div className="side-nav">
                    <Sidebar />
                </div>
                <div className="component">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
