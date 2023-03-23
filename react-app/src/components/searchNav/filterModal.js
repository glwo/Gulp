import React, { useEffect, useMemo, useState } from 'react';
import { NavLink, Link, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editFilter, setFilter } from '../../store/filter';
import { useModal } from '../../context/Modal';
import './searchNav.css'

export default function FilterModal() {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.session)

    const [reviews, setReviews] = useState('');
    const [ratings, setRatings] = useState('');
    const [cat1, setCat1] = useState('');
    const [cat2, setCat2] = useState('');
    const [cat3, setCat3] = useState('');
    const [cat4, setCat4] = useState('');
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    const [check4, setCheck4] = useState(false)

    const [checkCount, setCheckCount] = useState(0)

    const [errors, setErrors] = useState([]);
    const { closeModal } = useModal();

    // const addCount = () => {
    //     setCheckCount([check1, check2, check3, check4].reduce((acc, curr) => curr ? 1 : 0, 0))
    // }

    const currentFilter = useSelector(state => state.filter?.filter)
    console.log(currentFilter, 'currentfilter on modal')
    useMemo(() => {
        setReviews(currentFilter?.reviews || 'noInput')
        setRatings(currentFilter?.ratings || 'noInput')
        setCheck1(currentFilter?.category1 == 'restaurant' || currentFilter?.category2 == 'restaurant' || currentFilter?.category3 == 'restaurant' || currentFilter?.category4 == 'restaurant' ? true : false)
        setCheck2(currentFilter?.category1 == 'home' || currentFilter?.category2 == 'home' || currentFilter?.category3 == 'auto' || currentFilter?.category4 == 'salon' ? true : false)
        setCheck3(currentFilter?.category1 == 'auto' || currentFilter?.category2 == 'auto' || currentFilter?.category3 == 'auto' || currentFilter?.category4 == 'auto' ? true : false)
        setCheck4(currentFilter?.category1 == 'salon' || currentFilter?.category2 == 'salon' || currentFilter?.category3 == 'salon' || currentFilter?.category4 == 'salon' ? true : false)
        // setCheckCount([check1, check2, check3, check4].filter((curr) => curr).length)
        // if (check1) setCat1('restaurant')
        // if (check2) setCat2('home')
        // if (check3) setCat3('auto')
        // if (check4) setCat4('salon')
        // console.log(reviews, ratings, 'reviews', check1, check2, check3, check4, 'check', cat1, cat2, cat3, cat4, 'okay?')
    }, [])

    useEffect(() => {
        if (check1) setCat1('restaurant')
        if (check2) setCat2('home')
        if (check3) setCat3('auto')
        if (check4) setCat4('salon')
        // console.log(reviews, ratings, 'reviews', check1, check2, check3, check4, 'check', cat1, cat2, cat3, cat4, 'okay?')
        setCheckCount(0)
        setCheckCount([check1, check2, check3, check4].filter((curr) => curr).length)

        // console.log(checkCount, 'checkCount')
        // console.log(cat1, cat2, cat3, cat4)
    }, [check1, check2, check3, check4, cat1, cat2, cat3, cat4, errors])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        // console.log(reviews, ratings, 'reviews', check1, check2, check3, check4, 'check', cat1, cat2, cat3, cat4, 'okay?')
        const currentCat = [cat1, cat2, cat3, cat4]

        const cleanedCat = currentCat.filter((curr) => ((curr != 'noInput' && curr != '')))
        const count = cleanedCat.length
        // console.log(count, 'count')
        // console.log(currentCat, 'currentCat', cleanedCat)


        const filterData = {
            reviews,
            ratings
        };

        // console.log(filterData[reviews], 'inside filter')
        if (filterData[reviews] == "") filterData[reviews] = 'noInput'
        if (filterData[ratings] == "") filterData[ratings] = 'noInput'

        for (let [idx, cat] of cleanedCat.entries()) {
            if (!(cat == 'noInput' || cat == '')) {
                filterData[`category${idx + 1}`] = cat
            }
        }

        for (let i = 0; i < 3 - count; i++) {
            filterData[`category${i + count + 1}`] = 'noInput'
        }

        // console.log(filterData, 'filterdata after claened')

        if (currentFilter) {
            const data = await dispatch(editFilter(filterData))
            if (data.errors) {
                setErrors(data.errors)
                // console.log(data.errors, 'what does errors say')
            } else {
                setErrors([]);
                closeModal()
            }
            return
        }

        const data = await dispatch(setFilter(filterData))
        if (data.errors) {
            setErrors(['Failed to create the filter. Please try again'])
            // console.log(errors, 'what does errors say')
        } else {
            setErrors([]);
            closeModal()

            //   history.push(`/business/${data.id}`);
        }
    }

    const resetFilterButton = () => {
        setReviews('noInput')
        setRatings('noInput')
        setCheck1(false)
        setCheck2(false)
        setCheck3(false)
        setCheck4(false)
    }

    return (
        <div className='customizeFilterModal'>
            <h1>Customized Filter Settings</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div>
                    <label>Sort By Number Of Reviews From</label>
                    <select
                        placeholder="Sort By"
                        type="text"
                        value={reviews}
                        onChange={(e) => setReviews(e.target.value)}>
                        <option value="noInput">Default</option>
                        <option value="fromHigh">High to Low</option>
                        <option value="fromLow">Low to High</option>
                    </select>
                </div>
                <div>
                    <label>Sort By Ratings From</label>
                    <select
                        placeholder="Sort By"
                        type="text"
                        value={ratings}
                        onChange={(e) => setRatings(e.target.value)}>
                        <option value="noInput">Default</option>
                        <option value="fromHigh">High to Low</option>
                        <option value="fromLow">Low to High</option>
                    </select>
                </div>
                <div>
                    <label>Select Up to 3 Categories</label>
                    <div className='catSelectionDiv'>
                        <label>
                            <div>
                                Restaurants
                            </div>
                            <input
                                type="checkbox"
                                checked={check1}
                                onChange={() => {
                                    setCheck1(!check1)
                                    if (!check1) setCat1('restaurant')
                                    else setCat1('noInput')
                                }}
                                disabled={checkCount >= 3 && !check1}
                            >
                            </input>
                        </label>
                        <label>
                            <div>
                                Home Services
                            </div>
                            <input
                                type="checkbox"
                                checked={check2}
                                onChange={() => {
                                    setCheck2(!check2)
                                    if (!check2) setCat2('home')
                                    else setCat2('noInput')
                                }}
                                disabled={checkCount >= 3 && !check2}
                            >
                            </input>
                        </label>
                        <label>
                            <div>
                                Auto Services
                            </div>
                            <input
                                type="checkbox"
                                checked={check3}
                                onChange={() => {
                                    setCheck3(!check3)
                                    if (!check3) setCat3('auto')
                                    else setCat3('noInput')
                                }}
                                disabled={checkCount >= 3 && !check3}
                            >
                            </input>
                        </label>
                        <label>
                            <div>
                                Hair Salons
                            </div>
                            <input
                                type="checkbox"
                                checked={check4}
                                onChange={() => {
                                    setCheck4(!check4)
                                    if (!check4) setCat4('salon')
                                    else setCat4('noInput')
                                }}
                                disabled={checkCount >= 3 && !check4}
                            >
                            </input>
                        </label>
                    </div>
                    <button className='saveFilter' type='Submit'>Save Filter Preferences</button>
                    <button className='resetFilter' type="button" onClick={() => resetFilterButton()}>Reset Filter Options</button>
                </div>

            </form>
        </div>
    )
}
