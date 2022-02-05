import React from 'react';
import { ListOfTransitions, ListItem, Total } from './TransictionsList.style'

export const TransictionsList = (props) => {

    const renderItems = (itemsArr) => itemsArr.map(elem => (
        <ListItem>
            <div className='squareColor' style={{ backgroundColor: "red" }}></div>
            <div className='itemInner'>
                <p>{elem.name}</p>
                <p>{elem.total}</p>
            </div>
        </ListItem>
    ));

    return (
        <>
            <ListOfTransitions>
                {props.categoriesSummary ? renderItems(props.categoriesSummary) : renderItems([])}
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
