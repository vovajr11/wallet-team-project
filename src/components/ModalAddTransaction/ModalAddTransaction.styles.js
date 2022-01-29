import styled from '@emotion/styled';

export const AddTransactionBtn = styled.button`
    color: #ffffff;
    width: 44px;
    height: 44px;
    background-color: #24cca7;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 6px 15px rgb(36 204 167 / 50%);
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 85px;
    bottom: 40px;

    &:hover {
        transform: scale(1.15);
        transition: 0.3s linear;
    }

    @media screen and (max-width: 768px) {
        position: fixed;
        right: 30px;
        bottom: 30px;
    }
    @media screen and (max-width: 320px) {
        position: fixed;
        right: 20px;
        bottom: 30px;
    }
`;

export const AddIcon = styled.svg`
    width: 20px;
    height: 20px;
`;
