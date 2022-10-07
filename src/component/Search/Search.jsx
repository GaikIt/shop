import React from 'react'

import search from './Search.module.scss';

const Search = (props) => {
    return (
        <div className={search.root}>
            <input value={props.searchValue} onChange={(event) => props.setSearchValue(event.target.value)} type="text" placeholder='Поиск пиццы ...' className={search.input} />
            {

                props.searchValue && (<img src="../Search/close.png" className={search.close} onClick={() => props.setSearchValue('')} ></img>)
            }

        </div >

    )
}

export default Search;