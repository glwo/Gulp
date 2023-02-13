import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
import './searchNav.css';

export default function SearchNav() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [city, setCity] = useState("");

    return (
        <div >
            <div className='mainSearchNav'>
                <input
                    placeholder="tacos, cheap dinner, Max's"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <a id='pipeSearch'> | </a>
                <input
                    placeholder="address, neighborhood, city, state or zip"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <div className='categoryBar' id='categoryBar'>
                <Link exact to='/category/restaurants'>
                    <div>Restaurants <i class="fa fa-caret-down"></i></div>
                </Link>
                <Link exact to='/category/homeServices'>
                    <div>Home Services <i class="fa fa-caret-down"></i></div>
                </Link>
                <Link exact to='/category/autoServices'>
                    <div>Auto Services <i class="fa fa-caret-down"></i></div>
                </Link>
                <Link exact to='/category/hairSalons'>
                    <div>Hair Salons <i class="fa fa-caret-down"></i></div>
                </Link>
            </div>
        </div>
    )
}
