import React from 'react'
import { useState, useEffect } from 'react';

import Categories from '../component/Categories/Categories';
import Paginat from '../component/Pagination/Pagination';
import PizzaBlock from '../component/PizzaBlock/PizzaBlock';
import SkeletonPizza from '../component/PizzaBlock/pizzaBlockSkeleton';
import Sort from '../component/Sort/Sort';
import './Home'
const Home = ({ searchValue }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
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
        const search = searchValue ? `&search=${searchValue}` : '';
        fetch(`https://632741ec5731f3db9956538d.mockapi.io/item?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then((res) => res.json())
            .then(
                (arr) => {
                    setItems(arr);
                    setLoading(false);
                }
            )
        window.scrollTo(0, 0);

    }, [categoryId, sortSelect, searchValue, currentPage])


    const Skeleton = [...new Array(6)].map((_, index) => <SkeletonPizza key={index} />);
    const pizzas = items.filter(obj => {
        if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    })
        .map((item, i) => <PizzaBlock key={item.id} {...item} />);
    return (
        <div className='container'>
            <div className="content__top ">
                <Categories categoryId={categoryId} setCategoryId={(i) => setCategoryId(i)} />
                <Sort value={sortSelect} setSortSelect={(i) => setSortSelect(i)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? Skeleton : pizzas}
            </div>
            <Paginat onChangePage={(number) => setCurrentPage(number)} />
        </div>
    )
};
export default Home;