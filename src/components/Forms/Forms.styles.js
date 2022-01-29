import { Form } from 'formik';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import styled from '@emotion/styled';

export const FormContainer = styled.div`
    background-color: white;
    border-radius: 20px;
    padding: 40px 65px 65px 60px;
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

export const StyledFormControl = styled(FormControl)`
    margin-bottom: 40px;

    &:last-child {
        margin-bottom: 50px;
    }
`;

export const StyledInput = styled(Input)`
    width: 410px;
`;
