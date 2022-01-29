import { BalanceWrap } from './Balance.styles';

const Balance = () => {
    const balanceValue = '24 000.0';

    return (
        <BalanceWrap>
            <h3>Your balance</h3>
            <p>
                <span>₴</span> {balanceValue}
            </p>
        </BalanceWrap>
    );
};

export default Balance;
