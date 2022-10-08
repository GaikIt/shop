import React from 'react';
import './_categories.scss';

import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../../redux/slices/filterSlice';
const Categories = () => {
    let categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const dispatch = useDispatch();
    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }
    const categoryId = useSelector((state) => state.filter.categoryId);

    return (
        <div className="categories">
            <ul>{categories.map((item, index) => (
                <li key={item}
                    onClick={() => {
                        onChangeCategory(index);
                    }}
                    className={categoryId === index ? 'active' : ''}
                >{item}</li>

            ))
            }

            </ul>
        </div>
    )
}

export default Categories;