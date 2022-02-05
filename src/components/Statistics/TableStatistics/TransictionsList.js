import React from 'react';
import { ListOfTransitions, ListItem, Total } from './TransictionsList.style'

export const TransictionsList = (props) => {

    const renderItems = (itemsArr) => itemsArr.map(elem => (
        <ListItem key={elem.name}>
            <div className='squareColor' style={{ backgroundColor: "red" }}></div>
            <div className='itemInner' >
                <p>{elem.name}</p>
                <p>{elem.total}</p>
            </div>
        </ListItem>
    ));

    console.log(props.transactionObj);

    return (
        <>
            <ListOfTransitions>
                {props.categoriesSummary ? renderItems(props.categoriesSummary) : renderItems([])}
            </ListOfTransitions>
            <Total>
                <p>Expenses:</p>
                <p className='expenses'>{props.transactionObj.expenseSummary}</p>
            </Total>
            <Total>
                <p>Incomes:</p>
                <p className='incomes'>{props.transactionObj.incomeSummary}</p>
            </Total>
        </>
    )
}
