import styled from '@emotion/styled';

export const NotFoundWrap = styled.section`
    width: 100%;
    height: calc(100vh - 100px);
    text-align: center;
    padding-top: 40%;
    color: #4a56e2;
    h1 {
        font-size: 128px;
        font-weight: bold;
    }
    @media screen and (max-width: 1279px) {
        padding-top: 30%;

        h1 {
            font-size: 72px;
        }
    }
`;
