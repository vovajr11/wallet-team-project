import { css } from '@emotion/react';

export const GlobalStyles = css`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }

    a {
        text-decoration: none;
    }
`;
