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

export const Toggler = styled.div`
    display: flex;
    gap: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    justify-content: center;
    align-items: center;
`;

export const ToggleP = styled.p`
    &.green {
        color: #24cca7;
    }
    &.pink {
        color: #ff6596;
    }

    &.grey {
        color: #e0e0e0;
    }

    margin: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 1;
    font-family: Circe, sans-serif;
`;

export const ToggleLabel = styled.label`
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    > input:checked ~ div:first-of-type div {
        left: 37px;
        background-color: #ff6596;
        box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
    }
`;

export const ToggleInput = styled.input`
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
`;

export const ToggleBackground = styled.div`
    width: 80px;
    height: 40px;
    border-radius: 30px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    opacity: 1;
    transition: background-color 200ms ease-in-out;
`;

export const ToggleBtn = styled.div`
    position: absolute;
    top: -2px;
    left: -1px;
    width: 44px;
    height: 44px;
    background-color: #24cca7;
    border-radius: 22px;
    transition: left 250ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
`;
