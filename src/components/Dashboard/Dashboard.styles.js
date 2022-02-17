import styled from '@emotion/styled';

import { font, color, device } from '../../components/GlobalStyles';

export const TransactionCardWrap = styled.div`
    margin-top: 30px;
    height: 60vh;
    overflow: scroll;
    @media screen and (${device.mobile}) {
        height: 50vh;
    }
`;
export const TransactionCard = styled.ul`
    list-style: none;
    background-color: white;
    position: relative;
    font-family: ${font.secondary};
    border-radius: 10px;
    margin-bottom: 10px;
    overflow: hidden;

    &:after {
        position: absolute;
        content: '';
        width: 5px;
        height: 100%;
        top: 0;
        left: 0;
        background-color: ${props =>
            props.theme === 'EXPENSE' ? color.red : color.green};
    }
    li {
        span:first-of-type {
            font-size: 18px;
        }
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        line-height: 1.25;
        padding: 10px 20px 14px;
    }
    li:not(:first-of-type) {
        border-top: 1px solid ${color.greyLight};
    }
`;

export const TableWrap = styled.div`
    height: 60vh;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 2px;
    }

    &::-webkit-scrollbar-track {
    }

    &::-webkit-scrollbar-thumb {
        background: ${color.grey};
    }
`;

export const Table = styled.table`
    table-layout: auto;
    width: 100%;
    border-spacing: 0px;

    text-align: left;
    font-family: ${font.secondary};
    font-weight: 400;

    thead {
        position: sticky;
        top: -1px;
        background-color: white;
        z-index: 2;
        th {
            font-weight: 400;
            padding: 16px 10px 19px;
        }

        th:first-of-type {
            padding-left: 20px;
            border-radius: 30px 0px 0px 30px;
        }
        th:last-of-type {
            padding-right: 20px;
            border-radius: 0px 30px 30px 00px;
        }
        th:nth-of-type(n + 5) {
            text-align: right;
        }
    }

    tbody {
        td {
            padding: 15px 10px 19px;
        }
        td:first-of-type {
            padding-left: 20px;
            white-space: nowrap;
        }
        td:nth-of-type(2) {
            padding-left: 20px;
        }

        td:nth-of-type(n + 5) {
            text-align: right;
        }
        td:last-of-type {
            padding-right: 20px;
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

export const ColoredTd = styled.td`
    color: ${props => (props.theme === 'EXPENSE' ? color.red : color.green)};
`;
