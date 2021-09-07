import React from 'react'
import './Header.scss';
import { AiFillHome} from 'react-icons/ai'
import { Link, useRouteMatch } from 'react-router-dom';
const Header = () => {
    const match = useRouteMatch()
    return (
        <>
            <div className='header'>
                <div className='menu'>
                    <div className='menu-icon'>
                        <div className="logo">
                            <h3>
                                <AiFillHome /> Welcome home
                            </h3>
                        </div>
                    </div>

                    <div className="menu-items">
                        <ul className="list">
                            <Link to={`${match.path}`}>
                                <li className="item">Dashboard</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
