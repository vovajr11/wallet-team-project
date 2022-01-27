import { css } from '@emotion/react';
import '../stylesheet/fonts.css';

export const GlobalStyles = css`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        //font-family: 'Poppins';
        margin: 0;
    }

    a {
        text-decoration: none;
    }
`;
