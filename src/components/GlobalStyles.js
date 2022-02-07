import { css } from '@emotion/react';
import '../stylesheet/fonts.css';

export const GlobalStyles = css`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        font-family: 'Poppins', sans-serif;
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

/* VARS */
export const grid = {
    maxWidth: '1120px',
};

const breakpoint = {
    mobile: '768px',
    tablet: '1024px',
};

export const device = {
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
    green: '#24CCA7',
    red: '#FF6596',
    purple: '#4A56E2',
    purpleLight: '#6E78E8',
    authSectionBg: '#e7eaf2',
    authGray: '#e0e0e0',
    authGreen: '#24cca7',
    containerBg: '#f1f2f7',
};
