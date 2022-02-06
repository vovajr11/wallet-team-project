import styled from '@emotion/styled';

const Button = styled.button`
    font-family: Abel, sans-serif;
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 20px;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
`;

export const GreenBtn = styled(Button)`
    background: #24cca7;
    color: #ffffff;
    margin-bottom: 20px;
    opacity: 1;

    &:hover {
        opacity: 0.6;
        transition: 0.3s;
    }
`;

export const WhiteBtn = styled(Button)`
    background: #ffffff;
    color: #4a56e2;
    border: 1px solid #4a56e2;

    &:hover {
        color: #ffffff;
        background-color: #4a56e2;
        transition: 0.3s;
    }
`;
