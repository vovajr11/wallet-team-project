import './Balance.styles';

const Balance = () => {
    const balanceValue = '24 000.0';

    return (
        <div>
            <h3>Your balance</h3>
            <p>$ {balanceValue}</p>
        </div>
    );
};

export default Balance;
