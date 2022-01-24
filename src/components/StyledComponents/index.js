import { Form } from 'formik';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import styled from '@emotion/styled';

const Button = styled.button`
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 20px;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
`;

export const GreenBtn = styled(Button)`
    background: #24cca7;
    color: #ffffff;
`;

export const WhiteBtn = styled(Button)`
    background: #ffffff;
    border: 1px solid #4a56e2;

    a {
        color: #4a56e2;
    }
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
`;

export const StyledFormControl = styled(FormControl)``;

export const StyledInput = styled(Input)`
    width: 410px;
`;
