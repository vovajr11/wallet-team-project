import { Table } from './Currency.styles';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';

const Currency = () => {
    const ONE_HOUR_IN_SECONDS = 1 * 60 * 60 * 1000;
    const CURRENT_TIME = new Date().getTime();
    const [currencyData, setCurrencyData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [seconds, setSeconds] = useState(ONE_HOUR_IN_SECONDS);
    const [timerActive, setTimerActive] = useState(false);

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

        console.log(currencyData);
    };

    useEffect(() => {
        if (seconds > 0 && timerActive) {
            setTimeout(setSeconds, 100, seconds - 1);
        } else {
            setTimerActive(false);
        }
    }, [seconds, timerActive]);

    useEffect(() => {
        if (localStorage.getItem('currency') !== null) {
            const deadline =
                JSON.parse(localStorage.getItem('currency')).currentTime +
                ONE_HOUR_IN_SECONDS;
            const restOfTheTime = deadline - CURRENT_TIME;

            if (restOfTheTime < 0) {
                fetchData();

                const obj = {
                    currentTime: CURRENT_TIME,
                    currencyData: currencyData,
                };
                localStorage.setItem('currency', JSON.stringify(obj));

                console.log('if');
            } else {
                console.log('else');
                console.log('не робим запит берем старі дані');

                const oldData = localStorage.getItem('currency');
                console.log(oldData, 'oldData');

                setCurrencyData(oldData);
                console.log('my data' + currencyData);
                setLoading(false);
            }
        } else {
            fetchData();
            localStorage.setItem('currency', JSON.stringify(currencyData));
        }
    }, []);

    /*   useEffect(() => {
        if (localStorage.getItem('currency').currentTime !== null) {
            const CURRENT_TIME = new Date().getTime();
            const deadline =
                JSON.parse(localStorage.getItem('currency')).currentTime +
                ONE_HOUR_IN_SECONDS;
            const restOfTheTime = deadline - CURRENT_TIME;

            if (restOfTheTime < 0) {
                fetchData();

                const obj = {
                    currentTime: CURRENT_TIME,
                    currencyData: currencyData,
                };
                localStorage.setItem('currency', JSON.stringify(obj));

                console.log('if');
            } else {
                console.log('else');
                console.log('не робим запит берем старі дані');

                const oldData = localStorage.getItem('currency');
                console.log(oldData, 'oldData');

                setCurrencyData(oldData);
                setLoading(false);
            }

            return () => {
                setCurrencyData({});
            };
        } else {
            fetchData();
            localStorage.setItem('currency', JSON.stringify(currencyData));
        }
    }, []);*/

    console.log(currencyData, 'currencyData');

    return <>{loading ? <Loader /> : <TableC data={currencyData} />}</>;
};

const TableC = ({ data }) => {
    return (
        <>
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
        </>
    );
};

export default Currency;
