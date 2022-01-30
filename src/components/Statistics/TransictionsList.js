import React from 'react';
import { ListOfTransitions, ListItem, Total } from './Statistics.styles'

export const TransictionsList = (props) => {

    const renderItems = (itemsArr) => itemsArr.map(elem => (
        <ListItem>
            <div className='squareColor' style={{ backgroundColor: "red" }}></div>
            <div className='itemInner'>
                <p>Main expenses</p>
                <p>8 700.00</p>
            </div>
        </ListItem>
    ))

    return (
        <>
            <ListOfTransitions>
                {renderItems([1, 2, 3, 4, 5, 6])}
            </ListOfTransitions>
            <Total>
                <p>Expenses:</p>
                <p className='expenses'>22 549.24</p>
            </Total>
            <Total>
                <p>Incomes:</p>
                <p className='incomes'>27 350.00</p>
            </Total>
        </>
    )
}
