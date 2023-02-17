import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Link, useParams, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
import './searchNav.css';
import OpenModalButton from '../OpenModalButton';
import { getFilter } from '../../store/filter';
import FilterModal from './filterModal';

export default function SearchNav() {
    const history = useHistory()
    const dispatch = useDispatch();
    const currentPath = useLocation().pathname.slice(1, 9)
    const subPath = useLocation().pathname.slice(10)
    // console.log(subPath)
    // const allPath = useLocation()
    // const barChange = useContext(BarContext)
    const [search, setSearch] = useState("");
    const [city, setCity] = useState("");
    const { location } = useParams()
    // console.log(useParams(), 'prarams')
    const [bar, setBar] = useState("")
    const [gotFilter, setGotFilter] = useState(false)

    const sessionUser = useSelector(state => state.session.user);
    const currentFilter = useSelector(state => state.filter?.filter)
    // console.log(currentFilter, 'current filter')
    useEffect(() => {
        const derivedSubPath = subPath.split('/')[0]
        // console.log(derivedSubPath)
        setBar(derivedSubPath)
        // console.log(bar)
        // if (currentPath)
        if (!currentFilter) {
            // console.log('ehelloo?')
            dispatch(getFilter())
        }

    }, [dispatch, currentFilter, bar, subPath]) //delete bar after filter is working!

    // const barClick = (businessCat) => {
    //     setBar(businessCat)
    // }

    // const gotIt = () => {
    //     <h2>got it boss</h2>
    // }

    // const addFilterClick = () => {
    //     return (
    //         <OpenModalButton />
    //     )
    // }
    // console.log(bar)
    // console.log(currentPath)

    const searchClick = (e) => {
        if (search != '') history.push(`/search/${search}/${city}`, { search, city })
        else history.push(`/search/${city}`, { search, city })
    }

    return (
        <div className='godNav'>
            {/* <form> */}

            <div className='mainSearchNav'>
                <input
                    placeholder="tacos, cheap dinner, Max's"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' ? searchClick() : ''}
                />
                <a id='pipeSearch'> | </a>
                <select
                    placeholder="Select City"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}>
                    <option value='all'>Select All Cities</option>
                    <option value="nyc">New York City</option>
                    <option value="sf">San Francisco</option>
                </select>

                <button onClick={() => searchClick()} >
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            {/* </form> */}
            <div className='categoryBar' id='categoryBar'>
                <Link to={`/category/restaurants`}>
                    <div>Restaurants <i class="fa fa-caret-down"></i></div>
                    {bar == 'restaurants' && currentPath == 'category' ? <hr className='cat-bar'></hr> : null}
                </Link>
                <Link exact to={`/category/homeServices`} >
                    <div>Home Services <i class="fa fa-caret-down"></i></div>
                    {bar == 'homeServices' && currentPath == 'category' ? <hr className='cat-bar'></hr> : null}
                </Link>
                <Link exact to={`/category/autoServices`}>
                    <div>Auto Services <i class="fa fa-caret-down"></i></div>
                    {bar == 'autoServices' && currentPath == 'category' ? <hr className='cat-bar'></hr> : null}
                </Link>
                <Link exact to={`/category/hairSalons`}>
                    <div>Hair Salons <i class="fa fa-caret-down"></i></div>
                    {bar == 'hairSalons' && currentPath == 'category' ? <hr className='cat-bar'></hr> : null}
                </Link>
                <div className='search-filter-bar' >
                    {sessionUser ? currentFilter ?
                        (<div id='categoryBar' className='editFilter'>
                            <Link exact to={`/category/filter`}>
                                <div className='filterLink'>Use Filter <i class="fa fa-caret-down"></i></div>
                                {bar == 'filter' && currentPath == 'category' ? <hr className='cat-bar'></hr> : null}
                            </Link>
                            <OpenModalButton
                                className='filterModal'
                                buttonText='Edit your filter!'
                                modalComponent={<FilterModal />}
                            />
                        </div>)
                        :
                        (<div id='categoryBar' className='editFilter'>
                            <OpenModalButton

                                buttonText='Add your filter!'
                                modalComponent={<FilterModal />}
                            />
                        </div>)
                        : 'Sign-in to add your custom filter!'}
                </div>

            </div>
        </div >
    )
}
