import styled from '@emotion/styled';

import { device, color, font, grid } from '../GlobalStyles';

export const StyleLayout = styled.div`
    backdrop-filter: blur(50px);
`;

export const MainContainer = styled.section`
    display: flex;
    justify-content: space-between;
    max-width: ${grid.maxWidth};
    min-height: calc(100vh - 87px);
    width: 100%;
    margin: 0 auto;
    padding: 0px 10px;
    @media screen and (${device.tablet}) {
        display: block;
        justify-content: center;
        max-width: none;
        padding: ${grid.paddingTablet};
    }
    @media screen and (${device.mobile}) {
        padding: ${grid.paddingMobile};
        min-height: calc(100vh - 67px);
    }
`;

export const Aside = styled.aside`
    padding-top: 40px;
    width: 34%;
    border-right: 1px solid #e7e5f2;
    position: relative;
    padding-right: 30px;
    &::after {
        position: absolute;
        content: '';
        width: 1px;
        height: 100%;
        top: 0;
        right: 0;
        box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
            1px 0px 0px rgba(255, 255, 255, 0.6);
    }
    @media screen and (${device.tablet}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
        justify-content: space-between;
        width: 100%;
        border-right: none;
        padding-right: 0;
        &::after {
            display: none;
        }
    }
    @media screen and (${device.mobile}) {
        grid-template-columns: 1fr;
    }
`;

export const AsideTop = styled.div`
    @media screen and (${device.mobile}) {
        width: 100%;
    }
`;

export const MainContent = styled.div`
    width: 66%;
    position: relative;
    padding-left: 30px;
    padding-top: 40px;
    @media screen and (${device.tablet}) {
        width: 100%;
        padding-left: 0;
    }
`;

export const Navigation = styled.ul`
    margin-bottom: 30px;
    list-style: none;
    li {
        font-size: 18px;
        line-height: 150%;
    }
    li:first-of-type {
        margin-bottom: 10px;
    }
    .currencyItemForMobile {
        display: none;
    }
    .NavLink {
        display: flex;
        align-items: center;
        column-gap: 20px;
        color: black;
        transition: all 0.4s ease;
        svg {
            width: 18px;
            height: 18px;
            transition: all 0.4s ease;
        }
        span {
            font-size: 18px;
            line-height: 150%;
        }
    }

    .NavLink.active,
    .NavLink:hover {
        text-shadow: 1px 0 0.65px black, 1px 0 0.65px black;
        svg {
            filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
            background-color: white;
            border-radius: 3px;
            path {
                fill: ${color.blue};
            }
        }
    }

    @media screen and (${device.mobile}) {
        margin-bottom: 0;
        display: flex;
        justify-content: center;
        column-gap: 30px;

        .currencyItemForMobile {
            display: block;
        }

        .NavLink {
            svg {
                width: 38px;
                height: 38px;
            }
            span {
                display: none;
            }
        }
        .NavLink.active,
        .NavLink:hover {
            svg {
                border-radius: 6px;
            }
        }
    }
`;
