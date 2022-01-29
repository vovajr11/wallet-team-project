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
        font-family: 'Poppins', sans-serif;
    }

    body {
        margin: 0;
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
