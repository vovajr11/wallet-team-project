import { Table, Warning } from './Currency.styles';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import axios from 'axios';

const Currency = () => {
    const ONE_HOUR_IN_SECONDS = 1 * 60 * 60 * 1000;
    const CURRENT_TIME = new Date().getTime();
    const [currencyData, setCurrencyData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        await fetch(
                'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
            )
            .then(response => {
                return response.json();
            })
            .then(data => {
                const DataFiltered = data.filter(
                    cur =>
                        cur.ccy === 'USD' ||
                        cur.ccy === 'RUR' ||
                        cur.ccy === 'EUR',
                );
                setCurrencyData(DataFiltered);
                localStorage.setItem(
                    'currency',
                    JSON.stringify({
                        currentTime: CURRENT_TIME,
                        currencyData: DataFiltered,
                    }),
                );

                setLoading(false);
            });
    };

    useEffect(() => {
        if (localStorage.getItem('currency') !== null) {
            const deadline =
                JSON.parse(localStorage.getItem('currency')).currentTime +
                ONE_HOUR_IN_SECONDS;
            const restOfTheTime = deadline - CURRENT_TIME;

            if (restOfTheTime < 0) {
                fetchData();
            } else {
                const oldData = JSON.parse(
                    localStorage.getItem('currency'),
                ).currencyData;

                setCurrencyData(oldData);
                setLoading(false);
            }
        } else {
            fetchData();
            localStorage.setItem('currency', JSON.stringify(currencyData));
        }
    }, []);

    return <>{loading ? <Loader /> : <TableC data={currencyData} />}</>;
};

const TableC = ({ data }) => {
    return (
        <>
            {data !== undefined ? (
                <Table>
                    <thead>
                        <tr>
                            <th>Currency</th>
                            <th>Purchase</th>
                            <th>Sale</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...data].map(currency => (
                            <tr key={currency.ccy}>
                                <td>{currency.ccy}</td>
                                <td>{(+currency.buy).toFixed(2)}</td>
                                <td>{(+currency.sale).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <Warning>Sorry, data isn't available right now</Warning>
            )}
        </>
    );
};

export default Currency;
