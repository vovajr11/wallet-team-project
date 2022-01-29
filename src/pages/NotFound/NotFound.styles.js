import styled from '@emotion/styled';

export const NotFoundWrap = styled.section`
    width: calc(100vw - 100px);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 128px;
        font-weight: bold;
    }
    @media screen and (max-width: 1279px) {
        h1 {
            font-size: 72px;
        }
    }
`;
