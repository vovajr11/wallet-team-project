import { TableWrap, Table, ColoredTd } from './Dashboard.styles';

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
                        {[...data].map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.transactionDate}</td>
                                <td>
                                    {transaction.type === 'EXPENSE' ? '-' : '+'}
                                </td>
                                <td>{transaction.category}</td>
                                <td>{transaction.comment}</td>
                                <ColoredTd theme={transaction.type}>
                                    {transaction.amount}
                                </ColoredTd>
                                <td>{transaction.balanceAfter}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableWrap>
        </>
    );
};

export default Dashboard;
