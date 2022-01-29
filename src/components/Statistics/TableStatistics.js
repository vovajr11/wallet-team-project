import React from 'react';
import { default as BasicSelect } from "./Select";
import { SelectsContainer, TableContainer } from "./Statistics.styles";
import { TableTransactions } from './TableTransactions';


import axios from 'axios';
import { useSelector } from 'react-redux';


const TableStatistics = () => {

    const checker = useSelector(state => state.session);
    console.log(checker);

    axios.get("https://wallet.goit.ua/api/transactions-summary",
        {
            "month": 1,
            "year": 2021,
        })
        .then(data => console.log(data.data));
    axios.get("https://wallet.goit.ua/api/transactions",
        {
        })
        .then(data => console.log(data.data));
    axios.post("https://wallet.goit.ua/api/transactions",

        {
            "transactionDate": "2021-01-01",
            "type": "INCOME",
            "categoryId": "c9d9e447-1b83-4238-8712-edc77b18b739",
            "comment": "Хліб",
            "amount": 22
        }
    )
        .then(data => console.log(data.data))
        .catch(err => console.log(err));

    return (
        <TableContainer>
            <SelectsContainer>
                <BasicSelect selectName="Month" />
                <BasicSelect selectName="Year" />
            </SelectsContainer>
            <TableTransactions />
        </TableContainer>
    )
}

export default TableStatistics;



