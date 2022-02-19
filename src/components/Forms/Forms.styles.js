import { Form } from 'formik';
import { Input, FormControl } from '@mui/material';
import styled from '@emotion/styled';
import { color, font } from '../GlobalStyles';

import ellipseViolet from '../../assets/svgs/ellipse-violet.svg';

export const BackgroundContainer = styled.div``;

export const Container = styled.div`
    min-height: 100%;
    max-width: 540px;
    margin: 0 auto;

    @media (min-width: 1280px) {
        height: 100vh;
        max-width: 100%;
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: 768px) {
        height: 100%;
        max-width: 768px;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
        margin: 60px auto;
    }
`;

export const SectionLeft = styled.section`
    display: none;

    @media (min-width: 768px) and (max-width: 1279px) {
        display: flex;
        justify-content: center;
        & > svg {
            width: 260px;
            height: 250px;
        }
    }

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
    }

    @media (min-width: 1280px) {
        width: 44%;
        flex-direction: column;
        justify-content: center;
        background: ${color.purpleExtraLight} url(${ellipseViolet}) left bottom
            no-repeat;
        background-size: 81%;
    }
`;

export const SectionRight = styled.section`
    display: flex;
    align-items: center;
    height: 100%;
    @media (min-width: 768px) and (max-width: 1279px) {
        margin-top: 50px;
    }

    @media (min-width: 1280px) {
        width: 56%;
        margin: auto 0;
        backdrop-filter: blur(50px) saturate(150%);
    }
`;

export const TitleApp = styled.h2`
    color: ${color.black};
    font: 30px/1.5 ${font.primary};

    @media (max-width: 1279px) {
        margin-left: 40px;
    }

    @media (min-width: 1280px) {
        margin-top: 20px;
    }
`;

export const FormContainer = styled.div`
    background-color: ${color.white};
    margin: 0 auto;
    width: 100%;

    @media (max-width: 767px) {
        height: 100vh;
        width: 100%;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media (min-width: 768px) {
        width: 100%;
        max-width: 540px;
        border-radius: 20px;
        padding: 40px 65px 60px 65px;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    .MuiFormControl-root {
        margin-top: 35px;

        &:first-of-type {
            margin-top: 0;
        }

        @media (min-width: 768px) {
            width: 100%;
        }

        > .MuiInput-root {
            &::before {
                border-bottom: 1px solid ${color.authGray};
            }

            &::after {
                border-bottom: 2px solid ${color.authGreen};
            }

            .MuiSvgIcon-root path {
                color: ${color.authGray};
            }
        }

        .MuiInput-input {
            color: #c7c4c4;
            font: 18px/1.27 ${font.secondary};
        }
    }
`;

export const StyledFormControl = styled(FormControl)`
    /* .MuiFormControl-root :last-child {
        
    } */
`;

export const StyledInput = styled(Input)`
    max-width: 410px;
    min-width: 280px;
`;
