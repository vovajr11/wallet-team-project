import { Form, Field } from 'formik';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import styled from '@emotion/styled';

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
        background-color: #e7eaf2;
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
    color: #000000;
    font-size: 30px;
    line-height: 45px;

    @media (min-width: 320px) and (max-width: 768px) {
        margin-left: 40px;
    }

    @media (min-width: 769px) {
        margin-top: 28px;
    }
`;

export const FormContainer = styled.div`
    background-color: white;
    margin: 0 auto;

    @media (max-width: 767px) {
        height: 100vh;
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

    @media (max-width: 767px) {
        padding-top: 110px;
    }
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    .MuiFormControl-root {
        margin-bottom: 40px;

        @media (min-width: 768px) {
            width: 100%;
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
