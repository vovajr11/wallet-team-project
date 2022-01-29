import styled from '@emotion/styled';

export const HeaderSection = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 85px;
    background: #fff;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 5%);
`;

export const HeaderEntrance = styled.ul`
    display: flex;
    align-items: center;
    padding: 0;
    list-style-type: none;
    background: #fff;
`;

export const HeaderEntranceItem = styled.li`
    display: flex;
    align-items: center;
    font: 18px/1.33 Arial;
    color: #bdbdbd;
    padding-left: 15px;

    &:last-child: {
    }

    &:last-child::before {
        content: '';
        display: inline-block;
        width: 2px;
        height: 30px;
        background: #bdbdbd;
    }
`;

export const LogoutIconW = styled.span`
    display: flex;
    align-items: center;
    padding: 0 8px 0 10px;
`;
