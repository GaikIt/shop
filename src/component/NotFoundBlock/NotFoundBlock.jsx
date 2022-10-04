import React from 'react'
import "./NotFoundBlock.scss";
const NotFoundBlock = () => {
    return (
        <div className='notFound'>
            <icon className="icon">😕</icon>
            <h2>Ничего не найдено </h2>
            <p>
                Вероятней всего, данная страница отсутствует в нашем интернет магазне.<br />
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
        </div>
    )
}
export default NotFoundBlock;