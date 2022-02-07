import styled from '@emotion/styled';
import { font, color } from '../GlobalStyles';

const Button = styled.button`
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 20px;
    font: 18px/1.27 ${font.secondary};
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
`;

export const GreenBtn = styled(Button)`
    background: ${color.green};
    color: ${color.white};
    margin-bottom: 20px;
    opacity: 1;

    &:hover {
        opacity: 0.6;
        transition: 0.3s;
    }
`;

export const WhiteBtn = styled(Button)`
    background: ${color.white};
    color: ${color.purple};
    border: 1px solid ${color.purple};

    &:hover {
        color: ${color.white};
        background-color: ${color.blue};
        transition: 0.3s;
    }
`;
