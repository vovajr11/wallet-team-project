import { Card } from './Dashboard.styles';
import Balance from '../Balance/Balance';
const DashboardMobile = ({ data }) => {
    return (
        <>
            <Balance />
            {data.map(transaction => (
                <ul key={transaction.date}>
                    <li>
                        <span>Date</span>
                        <span>{transaction.date}</span>
                    </li>
                    <li>
                        <span>Type</span>
                        <span>{transaction.type}</span>
                    </li>
                </ul>
            ))}
        </>
    );
};

export default DashboardMobile;
