import { TableWrap, Table } from './Dashboard.styles';

const Dashboard = ({ data }) => {
    return (
        <>
            <TableWrap>
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
                        {[...data].map(elem => (
                            <tr key={elem.id}>
                                <td>{elem.transactionDate}</td>
                                <td>{elem.type === 'EXPENSE' ? '-' : '+'}</td>
                                <td>{elem.categoryId}</td>
                                <td>{elem.comment}</td>
                                <td>{elem.amount}</td>
                                <td>{elem.balanceAfter}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableWrap>
        </>
    );
};

export default Dashboard;
