import styled from '@emotion/styled';

import { device, color, font } from '../GlobalStyles';

export const BalanceWrap = styled.div`
    width: 100%;
    background-color: white;
    padding: 8px 40px;
    border-radius: 30px;
    h3 {
        color: ${color.greyBalance};
        font-family: ${font.secondary};
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
