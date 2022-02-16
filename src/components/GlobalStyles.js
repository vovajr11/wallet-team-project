import { css } from '@emotion/react';
import '../stylesheet/fonts.css';
import ellipsePink from '../assets/svgs/ellipse-pink.svg';
import ellipseViolet from '../assets/svgs/ellipse-violet.svg';
/* VARS */
export const grid = {
    maxWidth: '1120px',
    paddingMobile: '0 20px',
    paddingTablet: '0 40px',
};

export const breakpoint = {
    mobileS: '374px',
    mobile: '767px',
    tablet: '1024px',
};

export const device = {
    mobileS: `max-width: ${breakpoint.mobileS}`,
    mobile: `max-width: ${breakpoint.mobile}`,
    tablet: `max-width: ${breakpoint.tablet}`,
};

export const modal = {
    paddingTablet: '60px 65px',
    paddingMobile: '18px 20px',
};

export const font = {
    primary: 'Poppins, Arial, sans-serif',
    secondary: 'Abel, Arial, sans-serif',
};

export const color = {
    black: '#000000',
    white: '#FFFFFF',
    grey: '#BDBDBD',
    greyBalance: '#A6A6A6',
    green: '#24CCA7',
    red: '#FF6596',
    purple: '#4A56E2',
    purpleLight: '#6E78E8',
    purpleExtraLight: '#E7EAF2',
    authSectionBg: '#e7eaf2',
    authGray: '#e0e0e0',
    authGreen: '#24cca7',
    containerBg: '#f1f2f7',
    blue: '#4A56E2',
    blueLight: '#6E78E8',
    greyLight: '#dcdcdf',
};

export const GlobalStyles = css`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body,
    #root {
        min-height: 100%;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
        html {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    }

    body {
        width: 100%;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        background: ${color.containerBg};
        background-image: url(${ellipsePink}), url(${ellipseViolet});
        background-position: right top, left bottom;
        background-repeat: no-repeat;

        @media screen and (${device.tablet}) {
            background-position: 170% 0%, 0% 100%;
        }
        @media screen and (${device.mobile}) {
            background-image: none;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        font-weight: normal;
        margin: 0;
    }

    a {
        text-decoration: none;
    }
`;
