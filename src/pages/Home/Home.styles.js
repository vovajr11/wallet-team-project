import styled from '@emotion/styled';

export const MainContainer = styled.section`
    display: flex;
    justify-content: space-between;
    max-width: 1120px;
    min-height: calc(100vh - 86px);
    width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 1280px) {
        display: block;
        justify-content: center;
        max-width: 0;
        padding-left: 40px;
        padding-right: 40px;
    }
`;

export const MainAside = styled.aside`
    width: 34%;
    padding-top: 40px;
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
    @media screen and (max-width: 1280px) {
        display: grid;
        grid-template-columns: 50% 50%;
        column-gap: 20px;
        justify-content: space-between;
        width: 100%;
        border-right: none;
        &::after {
            display: none;
        }
    }
`;

export const MainAsideTop = styled.div``;

export const MainContent = styled.div`
    width: 66%;
    @media screen and (max-width: 1280px) {
        width: 100%;
    }
`;

export const Navigation = styled.ul`
    margin-bottom: 30px;
    list-style: none;
    li {
        font-size: 18px;
        line-height: 150%;
    }
    li:first-child {
        margin-bottom: 10px;
    }
    .currencyItemForMobile {
        display: none;
    }
    @media screen and (max-width: 480px) {
        .currencyItemForMobile {
            display: block;
        }
    }
`;
