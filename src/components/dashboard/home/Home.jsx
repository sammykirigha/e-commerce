import React from 'react';
import './Home.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { Link, useRouteMatch } from 'react-router-dom';


const Home = () => {
    const match = useRouteMatch();
    return (
        <div className='home'>
            <div className='head'>
                <h3>Welcome to our online shopping site</h3>
                <div className="search">
                   <input type="search" placeholder="search for products...."/>
                   <BiSearch className='icon'/>
                </div>
                <FaShoppingCart className='cart-icon' />
            </div>
            <div className="page">
                <h4>our products categories</h4>
                <div className="cards">
                    <div className="card">
                        <div className='card__image'>
                            <img src='https://cdn0.vox-cdn.com/hermano/verge/product/image/9020/akrales_190311_3263_0177_squ.jpg' />
                        </div>
                        <div className="card__content">
                            <p className="card__title">
                                Latest Mobile Phones....
                            </p>
                            <div className="card__info">
                                <p className="detals"> List of all latest and upcoming mobile phones....lowest price phones to highest phone, and name, location and description</p>
                                <Link to={`${match.path}/phones`} >For more products</Link>
                                <div className="buttons">
                                    <button>add to cart</button>
                                    <button>details</button>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className="card">
                        <div className='card__image'>
                            <img src='https://pictures-kenya.jijistatic.com/9075476_fb-img-1589087196162-1_720x720.jpg' />
                        </div>
                        <div className="card__content">
                            <p className="card__title">
                                Cards information
                            </p>
                            <div className="card__info">
                                <p className="detals"> List of all latest and upcoming mobile phones....lowest price phones to highest phone, and name, location and description</p>
                                <Link to={`${match.path}/phones`} >For more products</Link>
                                <div className="buttons">
                                    <button>add to cart</button>
                                    <button>details</button>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className="card">
                        <div className='card__image'>
                            <img src='https://i.pinimg.com/736x/41/bc/d2/41bcd2c6b77db378a1062d980445f14b.jpg' />
                        </div>
                        <div className="card__content">
                            <p className="card__title">
                                Cards information
                            </p>
                            <div className="card__info">
                                <p className="detals"> List of all latest and upcoming mobile phones....lowest price phones to highest phone, and name, location and description</p>
                                <Link to={`${match.path}/phones`} >For more products</Link>
                                <div className="buttons">
                                    <button>add to cart</button>
                                    <button>details</button>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className="card">
                        <div className='card__image'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa2zU0e36sWwuo6QKRXh3-yLZBWb96oUWeDQ&usqp=CAU' />
                        </div>
                        <div className="card__content">
                            <p className="card__title">
                                Cards information
                            </p>
                            <div className="card__info">
                                <p className="detals"> List of all latest and upcoming mobile phones....lowest price phones to highest phone, and name, location and description</p>
                                <Link to={`${match.path}/phones`} >For more products</Link>
                                <div className="buttons">
                                    <button>add to cart</button>
                                    <button>details</button>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Home
