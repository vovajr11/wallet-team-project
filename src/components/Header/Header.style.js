import styled from '@emotion/styled';
import { device, grid, font, color } from '../GlobalStyles';

export const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px 85px;
    background: ${color.white};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5%);

    @media screen and (${device.tablet}) {
        padding: 20px 40px;
    }

    @media screen and (${device.mobile}) {
        padding: 15px 20px;
    }
`;

export const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: ${grid.maxWidth};
`;

export const LogoW = styled.span`
    @media screen and (${device.mobile}) {
        svg {
            width: 120px;
            height: 30px;
        }
    }
`;

export const HeaderEntrance = styled.ul`
    display: flex;
    align-items: center;
    padding: 0;
    list-style-type: none;
    background: ${color.white};
`;

export const HeaderEntranceItem = styled.li`
    display: flex;
    align-items: center;
    font: 18px/1.33 ${font.secondary};
    color: ${color.grey};
    padding-left: 15px;

    &:last-child::before {
        content: '';
        display: inline-block;
        width: 2px;
        height: 30px;
        background: ${color.grey};
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

export const LogoutBtnText = styled.span`
    font: 18px/1.33 ${font.secondary};
    color: ${color.grey};

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
