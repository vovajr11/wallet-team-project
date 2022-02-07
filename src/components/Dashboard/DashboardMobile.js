import { Card } from './Dashboard.styles';
import Balance from '../Balance/Balance';
const DashboardMobile = ({ data }) => {
    return (
        <>
            <Balance />
            {data.map(e => (
                <ul>
                    <li>
                        <span>Date</span>
                        <span>{e.date}</span>
                    </li>
                    <li>
                        <span>Type</span>
                        <span>{e.type}</span>
                    </li>
                </ul>
            ))}
        </>
    );
};

export default DashboardMobile;
