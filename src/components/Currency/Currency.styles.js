import styled from '@emotion/styled';

//TODO
//change size of Table

export const Table = styled.table`
    font-family: 'Abel';
    font-weight: 400;
    font-size: 18px;
    color: white;
    border-spacing: 0px;
    width: 348px;
    border-radius: 30px;
    overflow: hidden;
    text-align: left;
    background-color: rgba(74, 86, 226, 1);

    thead {
        background-color: rgba(255, 255, 255, 0.2);
        font-weight: inherit;
        th {
            padding: 17px 30px 20px;
        }
    }

    tbody {
        td {
            padding: 20px 30px 7px;
        }
    }
    tbody tr:last-child {
        height: 135px;
        padding-bottom: 0;
        td {
            padding: 0;
        }
    }
`;
