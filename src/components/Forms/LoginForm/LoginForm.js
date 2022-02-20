import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import { InputAdornment, FormControl } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { signInUser } from '../../../redux/auth/authAPI';
import { GreenBtn, WhiteBtn } from '../../StyledComponents';
import {
    LogoContainer,
    FormContainer,
    StyledForm,
    StyledInput,
    StyledErrorMessage,
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
                    dispatch(signInUser({ email, password }));
                }}
            >
                {({ values, handleSubmit, handleChange }) => (
                    <StyledForm onSubmit={handleSubmit}>
                        <FormControl variant="standard">
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
                        </FormControl>
                        <StyledErrorMessage>
                            <ErrorMessage name="email" />
                        </StyledErrorMessage>

                        <FormControl variant="standard">
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
                        </FormControl>
                        <StyledErrorMessage>
                            <ErrorMessage name="password" />
                        </StyledErrorMessage>

                        <GreenBtn type="submit" style={{ marginTop: '50px' }}>
                            Log in
                        </GreenBtn>
                        <Link to="/register">
                            <WhiteBtn type="button">Registration</WhiteBtn>
                        </Link>
                    </StyledForm>
                )}
            </Formik>
        </FormContainer>
    );
};

export default LoginForm;
