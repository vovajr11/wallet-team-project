import { Table } from './Currency.styles';
import { useState, useEffect } from 'react';

const Currency = () => {
    const [currencyData, setCurrencyData] = useState('');

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
            <tbody>
                {[...currencyData].map(currency => (
                    <tr key={currency.ccy}>
                        <td>{currency.ccy}</td>
                        <td>{(+currency.buy).toFixed(2)}</td>
                        <td>{(+currency.sale).toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default Currency;
