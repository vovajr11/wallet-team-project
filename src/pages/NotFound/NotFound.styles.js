import styled from '@emotion/styled';

export const NotFoundWrap = styled.section`
    width: 100%;
    height: 100vh;
    text-align: center;
    color: #4a56e2;

    h1 {
        font-size: 128px;
        font-weight: bold;
    }

    a {
        color: #4caf50;
    }

    @media screen and (max-width: 1279px) {
        padding-top: 30%;

        h1 {
            font-size: 72px;
        }
    }
`;
