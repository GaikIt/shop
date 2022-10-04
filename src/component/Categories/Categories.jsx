import React, { useState } from 'react';
import './_categories.scss';
const Categories = (props) => {
    let categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <ul>{categories.map((item, index) => (
                <li key={item}
                    onClick={() => {
                        props.setCategoryId(index);
                    }}
                    className={props.CategoryId === index ? 'active' : ''}
                >{item}</li>

            ))
            }

            </ul>
        </div>
    )
}

export default Categories;