import React from 'react'
import { Pagination } from '@mui/material';
export const Paginat = (props) => {
    let page = 1

    return (
        <div>
            <Pagination count={3} color="primary" onChange={

                (event) => {
                    props.onChangePage(Number(event.target.innerText))
                }
            } />
        </div>
    )
}

export default Paginat;