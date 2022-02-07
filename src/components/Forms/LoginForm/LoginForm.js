import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { authOperations } from '../../../redux/auth';
import { GreenBtn, WhiteBtn } from '../../StyledComponents';
import {
    LogoContainer,
    FormContainer,
    StyledForm,
    StyledFormControl,
    StyledInput,
} from '../Forms.styles';
import validationsForm from './validations';
import { ReactComponent as LogoIcon } from '../../../assets/svgs/logo.svg';

const LoginForm = () => {
    const dispatch = useDispatch();

    return (
        <FormContainer>
            <LogoContainer>
                <LogoIcon />
            </LogoContainer>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validationsForm}
                onSubmit={({ email, password }) => {
                    dispatch(authOperations.logIn({ email, password }));
                }}
            >
                {({ values, handleSubmit, handleChange }) => (
                    <StyledForm onSubmit={handleSubmit}>
                        <StyledFormControl variant="standard">
                            <StyledInput
                                value={values.email}
                                onChange={handleChange}
                                name="email"
                                type="email"
                                placeholder="E-mail"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                }
                            />
                        </StyledFormControl>
                        <ErrorMessage name="email" />

                        <StyledFormControl variant="standard">
                            <StyledInput
                                value={values.password}
                                onChange={handleChange}
                                name="password"
                                type="password"
                                placeholder="Password"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                }
                            />
                        </StyledFormControl>
                        <ErrorMessage name="password" />

                        <GreenBtn type="submit" style={{ marginTop: '50px' }}>
                            Log in
                        </GreenBtn>
                        <WhiteBtn type="button">
                            <Link to="/register">Registration</Link>
                        </WhiteBtn>
                    </StyledForm>
                )}
            </Formik>
        </FormContainer>
    );
};

export default LoginForm;
