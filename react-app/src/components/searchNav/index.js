import React, { useEffect, useState } from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
import './searchNav.css';

export default function SearchNav() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [city, setCity] = useState("");
    const { location } = useParams()
    // console.log(useParams(), 'prarams')
    useEffect(() => {
        console.log(location, 'locaiton')
    }, [dispatch])
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
                <select
                    placeholder="Select City"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}>
                    <option defaultValue='all'>Select All Cities</option>
                    <option value="nyc">New York City</option>
                    <option value="sf">San Francisco</option>
                </select>

                <button>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <div className='categoryBar' id='categoryBar'>
                <Link to={`/category/restaurants`}>
                    <div>Restaurants <i class="fa fa-caret-down"></i></div>
                </Link>
                <Link exact to={`/category/homeServices`}>
                    <div>Home Services <i class="fa fa-caret-down"></i></div>
                </Link>
                <Link exact to={`/category/autoServices`}>
                    <div>Auto Services <i class="fa fa-caret-down"></i></div>
                </Link>
                <Link exact to={`/category/hairSalons`}>
                    <div>Hair Salons <i class="fa fa-caret-down"></i></div>
                </Link>
            </div>
        </div >
    )
}
