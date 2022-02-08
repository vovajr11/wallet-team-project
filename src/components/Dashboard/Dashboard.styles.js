import styled from '@emotion/styled';

import { device, font, color } from '../../components/GlobalStyles';

export const Table = styled.table`
    width: 100%;
    border-spacing: 0px;

    text-align: left;
    font-family: ${font.secondary};
    font-weight: 400;

    thead {
        background-color: white;
        th {
            font-weight: 400;
            padding: 16px 20px 19px;
        }
        th:first-of-type {
            border-radius: 30px 0px 0px 30px;
        }
        th:last-of-type {
            border-radius: 0px 30px 30px 00px;
        }
        th:nth-of-type(n + 5) {
            text-align: right;
        }
    }

    tbody {
        tr {
            td {
                padding: 15px 20px 19px;
            }
            td:nth-of-type(2) {
                text-align: center;
            }
            td:nth-of-type(n + 5) {
                text-align: right;
            }
            td:nth-of-type(4) {
                max-width: 122px;
            }
        }
        tr:not(:first-of-type) {
            position: relative;
            &::after {
                position: absolute;
                content: '';
                top: 0px;
                left: 0;
                width: 100%;
                height: 1px;
                box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
            }
            td {
                border-top: 1px solid #dcdcdf;
            }
        }
    }
`;