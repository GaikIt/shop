import { debounce } from '@mui/material';
import React from 'react'

import search from './Search.module.scss';

const Search = (props) => {
    const inputRef = React.useRef();
    const [value, setValue] = React.useState('');

    const onClickClear = () => {
        props.setSearchValue('');
        setValue('');
        inputRef.current.focus();
    }

    const updateSearcValue = React.useCallback(
        debounce((str) => {
            props.setSearchValue(str);
        }, 250), [],
    )

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearcValue(event.target.value);
    }
    return (
        <div className={search.root}>
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                type="text"
                placeholder='Поиск пиццы ...' className={search.input}
            />
            {

                props.searchValue && (<img src="../Search/close.png" className={search.close} onClick={onClickClear} ></img>)
            }

        </div >

    )
}

export default Search;