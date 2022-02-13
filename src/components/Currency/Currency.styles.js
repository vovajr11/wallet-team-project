import styled from '@emotion/styled';

import CurrencyImg from '../../assets/svgs/currency.svg';

import { device, color, font } from '../GlobalStyles';

export const Table = styled.table`
    font-family: ${font.secondary};
    font-weight: 400;
    font-size: 18px;
    text-align: left;
    color: white;

    width: 348px;
    border-spacing: 0px;
    border-radius: 30px;
    overflow: hidden;
    margin: 30px 0 0px auto;

    background-color: ${color.blue};
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
    @media screen and (${device.tablet}) {
        width: 334px;
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
    @media screen and (${device.mobile}) {
        margin: 0 auto;
    }
    @media screen and (${device.mobileS}) {
        width: 280px;
        th {
            padding: 11px 10px 16px;
        }
        td {
            padding: 10px 10px 4px;
        }
    }
`;
