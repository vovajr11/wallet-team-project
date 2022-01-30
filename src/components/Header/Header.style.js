import styled from '@emotion/styled';

export const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px 85px;
    background: #fff;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 5%);

    @media screen and (max-width: 768px) {
        padding: 20px 40px;
    }

    @media screen and (max-width: 320px) {
        padding: 15px 20px;
    }
`;

export const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1120px;
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
    font: 18px/1.33 'Abel';
    color: #bdbdbd;
    padding-left: 15px;

    &:last-child::before {
        content: '';
        display: inline-block;
        width: 2px;
        height: 30px;
        background: #bdbdbd;
    }

    @media screen and (max-width: 768px) {
        padding-left: 0px;
        &:last-child::before {
            display: none;
        }
    }
`;

export const LogoutBtn = styled.button`
    background: none;
    display: flex;
    align-items: center;
    border: none;

    &:hover {
        cursor: pointer;
    }
`;

export const LogoutIconW = styled.span`
    padding: 0 8px 0 10px;
`;

export const LogoutBtnText = styled.span`
    font: 18px/1.33 'Abel';
    color: #bdbdbd;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
