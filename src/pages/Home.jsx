import React from 'react'
import { useState, useEffect } from 'react';

import Categories from '../component/Categories/Categories';
import PizzaBlock from '../component/PizzaBlock/PizzaBlock';
import SkeletonPizza from '../component/PizzaBlock/pizzaBlockSkeleton';
import Sort from '../component/Sort/Sort';
import './Home'
const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const [categoryId, setCategoryId] = useState(0);
    const [sortSelect, setSortSelect] = useState({
        name: 'популярности',
        sortProperty: 'rating'
    });


    useEffect(() => {
        setLoading(true);
        const sortBy = sortSelect.sortProperty.replace('-', '');
        const order = sortSelect.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';

        fetch(`https://632741ec5731f3db9956538d.mockapi.io/item?${category}&sortBy=${sortBy}&order=${order}`)
            .then((res) => res.json())
            .then(
                (arr) => {
                    setItems(arr);
                    setLoading(false);
                }
            )
        window.scrollTo(0, 0);

    }, [categoryId, sortSelect])

    return (
        <div className='container'>
            <div className="content__top ">
                <Categories categoryId={categoryId} setCategoryId={(i) => setCategoryId(i)} />
                <Sort value={sortSelect} setSortSelect={(i) => setSortSelect(i)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? [...new Array(6)].map((_, index) => <SkeletonPizza key={index} />) : items.map((item, i) => <PizzaBlock key={item.id} {...item} />)}
            </div>
        </div>
    )
}
export default Home;