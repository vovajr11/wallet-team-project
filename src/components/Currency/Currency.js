import { Table } from './Currency.styles';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';

const Currency = () => {
    const [currencyData, setCurrencyData] = useState('');
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
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
        return () => {
            setCurrencyData({});
        };
    }, []);

    return (
        <Table>
            <thead>
                <tr>
                    <th>Currency</th>
                    <th>Purchase</th>
                    <th>Sale</th>
                </tr>
            </thead>
            {loading ? <Loader /> : <Tbody data={currencyData} />}
        </Table>
    );
};

const Tbody = ({ data }) => {
    return (
        <tbody>
            {[...data].map(currency => (
                <tr key={currency.ccy}>
                    <td>{currency.ccy}</td>
                    <td>{(+currency.buy).toFixed(2)}</td>
                    <td>{(+currency.sale).toFixed(2)}</td>
                </tr>
            ))}
        </tbody>
    );
};

export default Currency;
