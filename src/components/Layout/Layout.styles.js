import styled from '@emotion/styled';

export const StyleLayout = styled.div`
    background: #f1f2f7;
    backdrop-filter: blur(50px);
`;

export const MainContainer = styled.section`
    display: flex;
    justify-content: space-between;
    max-width: 1120px;
    min-height: calc(100vh - 86px);
    width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 1279px) {
        display: block;
        justify-content: center;
        max-width: none;
        padding-left: 40px;
        padding-right: 40px;
    }
    @media screen and (max-width: 767px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const Aside = styled.aside`
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
    @media screen and (max-width: 1279px) {
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
`;

export const AsideTop = styled.div``;

export const MainContent = styled.div`
    width: 66%;
    @media screen and (max-width: 1279px) {
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
        svg {
            width: 18px;
            height: 18px;
        }
        span {
            font-size: 18px;
            line-height: 150%;
        }
        @media screen and (max-width: 480px) {
            svg {
                width: 38px;
                height: 38px;
            }
            span {
                display: none;
            }
        }
    }
    @media screen and (max-width: 480px) {
        .currencyItemForMobile {
            display: block;
        }
    }
`;
