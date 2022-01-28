import { Table } from './Currency.styles';

const Currency = ({ data }) => {
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
                {data.map(currency => (
                    <tr key={currency.id}>
                        <td>{currency.name}</td>
                        <td>{currency.purchase}</td>
                        <td>{currency.sale}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default Currency;
