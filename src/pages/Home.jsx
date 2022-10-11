import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';
import Categories from '../component/Categories/Categories';
import Paginat from '../component/Pagination/Pagination';
import PizzaBlock from '../component/PizzaBlock/PizzaBlock';
import SkeletonPizza from '../component/PizzaBlock/pizzaBlockSkeleton';
import Sort from '../component/Sort/Sort';
import './Home'
const Home = ({ searchValue }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const { categoryId, currentPage, sort } = useSelector((state) => state.filter)
    const navigate = useNavigate();

    const fetchPizza = async () => {
        setLoading(true);
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        try {
            const res = await axios.get(`https://632741ec5731f3db9956538d.mockapi.io/item?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`);
            setItems(res.data);
        } catch {
            alert('Ошибка при получении пицц')
        } finally {
            setLoading(false);
        }


    }

    useEffect(() => {
        fetchPizza();
        window.scrollTo(0, 0);

    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

    useEffect(() => {
        const queryString = qs.stringify({
            sortProperty: sort.sortProperty,
            categoryId,
            currentPage
        })
        navigate(`?${queryString}`);
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);


    const Skeleton = [...new Array(6)].map((_, index) => <SkeletonPizza key={index} />);
    const pizzas = items.filter(obj => {
        if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    }).map((item) => <PizzaBlock key={item.id} {...item} />);

    return (
        <div className='container'>
            <div className="content__top ">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? Skeleton : pizzas}
            </div>
            <Paginat />
        </div>
    )
};
export default Home;