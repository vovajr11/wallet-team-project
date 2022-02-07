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
`;

export const WhiteBtn = styled(Button)`
    background: #ffffff;
    border: 1px solid ${color.purple};
    color: ${color.purple};
`;
