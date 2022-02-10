import React, { useState } from 'react';
import { ListOfTransitions, ListItem, Total } from './TransictionsList.style';
import numberFormater from '../../../logic/numberFormater';

export const TransictionsList = (props) => {
    const renderItems = (itemsArr) => itemsArr.map((elem, index) => (
        <ListItem key={elem.name}>
            <div className='squareColor' style={{ backgroundColor: props.squareColors[index] }}></div>
            <div className='itemInner' >
                <p>{elem.name}</p>
                <p>{numberFormater(elem.total)}</p>
            </div>
        </ListItem>
    ));

    const emptyListMessage = (
        <ListItem >
            <div className='itemInner' >
                <p>Sorry, you have no transactions during this month</p>
            </div>
        </ListItem>
    )
    console.log("PROPs", props);

    const renderList = () => props.categoriesSummary?.length ? renderItems(props.categoriesSummary) : emptyListMessage;

    return (
        <div>
            <ListOfTransitions>
                {renderList()}
            </ListOfTransitions>
            <div>
                <Total>
                    <p>Expenses:</p>
                    <p className='expenses'>{numberFormater(props.transactionObj.expenseSummary)}</p>
                </Total>
                <Total>
                    <p>Incomes:</p>
                    <p className='incomes'>{numberFormater(props.transactionObj.incomeSummary)}</p>
                </Total>
            </div>
        </div>
    )
}
