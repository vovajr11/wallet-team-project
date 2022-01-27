import './Currency.styles';

const Currency = () => {
    const currencyList = [
        {
            name: 'USD',
            purchase: 27.55,
            sale: 28,
            id: 1,
        },
        {
            name: 'EUR',
            purchase: 31.55,
            sale: 32,
            id: 2,
        },
    ];
    return (
        <table>
            <tr>
                <th>Currency</th>
                <th>Purchase</th>
                <th>Sale</th>
            </tr>

            {currencyList.map(currency => (
                <tr key={currency.id}>
                    <td>{currency.name}</td>
                    <td>{currency.purchase}</td>
                    <td>{currency.sale}</td>
                </tr>
            ))}
        </table>
    );
};

export default Currency;
