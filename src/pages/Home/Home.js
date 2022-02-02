import React from 'react';
import { Table } from './Home.styles';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';

const Home = () => {
    const dashboardList = [
        {
            date: '04.11.2019',
            type: '-',
            category: 'Other',
            comments: 'A gift for wife',
            amount: '300.00',
            balance: '6900.00',
        },
        {
            date: '04.11.2019',
            type: '+',
            category: 'Car',
            comments: 'Vegetables for the week',
            amount: '1000.00',
            balance: '14000.00',
        },
    ];

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Comments</th>
                        <th>Amount</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {dashboardList.map(elem => (
                        <tr key={+elem.balance / +elem.amount}>
                            <td>{elem.date}</td>
                            <td>{elem.type}</td>
                            <td>{elem.category}</td>
                            <td>{elem.comments}</td>
                            <td>{elem.amount}</td>
                            <td>{elem.balance}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <ModalAddTransaction />
        </div>
    );
};
export default Home;
