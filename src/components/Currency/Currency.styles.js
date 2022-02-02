import styled from '@emotion/styled';

import CurrencyImg from '../../assets/svgs/currency.svg';

export const Table = styled.table`
    font-family: 'Abel';
    font-weight: 400;
    font-size: 18px;
    text-align: left;
    color: white;

    width: 348px;
    border-spacing: 0px;
    border-radius: 30px;
    overflow: hidden;
    margin: 30px auto 0;

    background-color: rgba(74, 86, 226, 1);
    background-image: url(${CurrencyImg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position-y: bottom;
    thead {
        background-color: rgba(255, 255, 255, 0.2);
        th {
            font-weight: 400;
            padding: 17px 30px 20px;
        }
    }

    tbody {
        td {
            font-size: 16px;
            line-height: 125%;
            padding: 20px 30px 7px;
        }

        tr:last-child {
            td {
                padding-bottom: 135px;
            }
        }
    }
    @media screen and (max-width: 1279px) {
        width: 334px;
        margin: 0 auto;
        background-position-y: 150%;
        thead {
            th {
                padding: 11px 20px 16px;
            }
        }
        tbody {
            td {
                padding: 10px 20px 4px;
            }
            tr:last-child {
                td {
                    padding-bottom: 22px;
                }
            }
        }
    }
`;
