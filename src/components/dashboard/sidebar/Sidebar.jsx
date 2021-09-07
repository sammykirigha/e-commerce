
import React from 'react'
import './Sidebar.scss'
import { Link, useRouteMatch } from 'react-router-dom'

const Sidebar = () => {
    const match = useRouteMatch()
    return (
        <div className='sidebar'>
            <ul className="side-nav">
                <li className="side-nav__item side-nav__item--active">
                    <Link to={`${match.path}`} className='side-nav__link'>
                        <span>dashboard</span>
                    </Link>
                </li>
                <li className="side-nav__item side-nav__item--active">
                    <Link to={`${match.path}/sports`} className='side-nav__link'>
                        <span>Sports wear</span>
                    </Link>
                </li>
                <li className="side-nav__item side-nav__item--active">
                    <Link to={`${match.path}/men`} className='side-nav__link'>
                        <span>men wear</span>
                    </Link>
                </li>
                <li className="side-nav__item side-nav__item--active">
                    <Link to={`${match.path}/women`} className='side-nav__link'>
                        <span>women wear</span>
                    </Link>
                </li>
                <li className="side-nav__item side-nav__item--active">
                    <Link to={`${match.path}/phones`} className='side-nav__link'>
                        <span>phones</span>
                    </Link>
                </li>
                <li className="side-nav__item side-nav__item--active">
                    <Link to={`${match.path}/kids`} className='side-nav__link'>
                        <span>kids wear</span>
                    </Link>
                </li>
                <li className="side-nav__item side-nav__item--active">
                    <Link to={`${match.path}/laptops`} className='side-nav__link'>
                        <span>laptops</span>
                    </Link>
                </li>
                <li className="side-nav__item side-nav__item--active">
                    <Link to={`${match.path}/others`} className='side-nav__link'>
                        <span>other items</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
