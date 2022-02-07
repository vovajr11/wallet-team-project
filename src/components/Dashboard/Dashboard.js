import { Table } from './Dashboard.styles';

const Dashboard = ({ data }) => {
    return (
        <>
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
                    {data.map(elem => (
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
        </>
    );
};

export default Dashboard;
