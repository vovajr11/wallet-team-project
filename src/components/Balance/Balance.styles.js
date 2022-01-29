import styled from '@emotion/styled';

export const BalanceWrap = styled.div`
    --grey: rgba(166, 166, 166, 1);

    width: 100%;
    background-color: white;
    padding: 8px 40px;
    border-radius: 30px;
    margin-bottom: 30px;
    h3 {
        color: var(--grey);
        font-family: 'Abel';
        font-size: 12px;
        text-transform: uppercase;
    }
    p {
        font-size: 30px;
        line-height: 150%;
        font-weight: bold;
        span {
            font-weight: 400;
        }
    }
`;
