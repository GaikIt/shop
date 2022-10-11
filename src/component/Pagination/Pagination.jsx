import React from 'react'
import { Pagination } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/filterSlice';
export const Paginat = () => {
    const dispatch = useDispatch();
    const onChangePage = (number) => {
        dispatch(setCurrentPage(number));
    }
    return (

        <div>
            <Pagination count={3} color="primary" onChange={(event => {
                onChangePage(Number(event.target.innerText))
            })} />
        </div>
    )
}

export default Paginat;