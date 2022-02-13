import { BalanceWrap } from './Balance.styles';
import { useSelector } from 'react-redux';
import numberFormater from '../../logic/numberFormater';

const Balance = () => {
    const balanceValue = useSelector(state => state.session.user.balance);

    return (
        <BalanceWrap>
            <h3>Your balance</h3>
            <p>
                <span>₴</span> {numberFormater(balanceValue)}
            </p>
        </BalanceWrap>
    );
};

export default Balance;
