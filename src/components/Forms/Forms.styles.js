import { Form } from 'formik';
import { Input, FormControl } from '@mui/material';
import styled from '@emotion/styled';
import { color, font, device } from '../GlobalStyles';

export const BackgroundContainer = styled.div`
    background: #f1f2f7;
    backdrop-filter: blur(50px);
`;

export const Container = styled.div`
    height: 100vh;
    max-width: 540px;
    margin: 0 auto;

    @media (min-width: 1280px) {
        max-width: 1920px;
        display: flex;
        justify-content: space-between;
    }
`;

export const SectionLeft = styled.section`
    display: none;

    @media (min-width: 768px) and (max-width: 1279px) {
        padding-top: 60px;

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
        background-color: ${color.authSectionBg};
    }
`;

export const SectionRight = styled.section`
    @media (min-width: 768px) and (max-width: 1279px) {
        margin-top: 50px;
    }

    @media (min-width: 1280px) {
        width: 56%;
        margin: auto 0;
    }
`;

export const TitleApp = styled.h2`
    color: ${color.black};
    font: 30px/1.5 ${font.primary};

    @media (max-width: 1279px) {
        margin-left: 40px;
    }

    @media (min-width: 1280px) {
        margin-top: 28px;
    }
`;

export const FormContainer = styled.div`
    background-color: ${color.white};
    margin: 0 auto;

    @media (max-width: 767px) {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media (min-width: 768px) {
        border-radius: 20px;
        padding: 40px 65px 60px 65px;
        max-width: 540px;
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
    margin-top: 50px;

    .MuiFormControl-root {
        margin-top: 40px;

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
