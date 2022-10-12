import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';
import Categories from '../component/Categories/Categories';
import Paginat from '../component/Pagination/Pagination';
import PizzaBlock from '../component/PizzaBlock/PizzaBlock';
import SkeletonPizza from '../component/PizzaBlock/pizzaBlockSkeleton';
import Sort from '../component/Sort/Sort';
import './Home'
import { fetchPizzas } from '../redux/slices/pizzaSlice';
const Home = ({ searchValue }) => {
    const { categoryId, currentPage, sort } = useSelector((state) => state.filter);
    const { item, status } = useSelector((state) => state.pizza);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getPizza = async () => {
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        dispatch(fetchPizzas({
            sortBy,
            order,
            category,
            search,
            currentPage
        }
        ));


    }

    useEffect(() => {
        getPizza();
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
    const pizzas = item.filter(obj => {
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
            {
                status == 'error' ? (
                    <div>
                        <h2>Ничего не найдено </h2>
                        <p>
                            Вероятней всего, данная страница отсутствует в нашем интернет магазне.<br />
                            Для того, чтобы заказать пиццу, перейди на главную страницу.
                        </p> </div>
                ) : <div className="content__items">
                    {status === 'Loading' ? Skeleton : pizzas}
                </div>
            }

            <Paginat />
        </div>
    )
};
export default Home;