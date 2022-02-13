import { TransactionCard, TransactionCardWrap } from './Dashboard.styles';
import Balance from '../Balance/Balance';

import numberFormater from '../../logic/numberFormater';
const DashboardMobile = ({ data }) => {
    return (
        <>
            <Balance />
            <TransactionCardWrap>
                {data.map(transaction => (
                    <TransactionCard
                        key={transaction.id}
                        theme={transaction.type}
                    >
                        <li>
                            <span>Date</span>
                            <span>{transaction.transactionDate}</span>
                        </li>
                        <li>
                            <span>Type</span>
                            <span>
                                {transaction.type === 'EXPENSE' ? '-' : '+'}
                            </span>
                        </li>
                        <li>
                            <span>Category</span>
                            <span>{transaction.category}</span>
                        </li>
                        <li>
                            <span>Comment</span>
                            <span>{transaction.comment}</span>
                        </li>
                        <li>
                            <span>Amount</span>
                            <span>{numberFormater(transaction.amount)}</span>
                        </li>
                        <li>
                            <span>Balance</span>
                            <span>
                                {numberFormater(transaction.balanceAfter)}
                            </span>
                        </li>
                    </TransactionCard>
                ))}
            </TransactionCardWrap>
        </>
    );
};

export default DashboardMobile;
