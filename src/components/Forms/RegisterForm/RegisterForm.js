import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import { InputAdornment } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import { signupUser } from '../../../redux/auth/authAPI';
import validationsForm from './validations';
import PasswordStrengthBar from './PasswordStrengthBar';
import { Notification } from '../../Notification';
import { GreenBtn, WhiteBtn } from '../../StyledComponents';
import {
    LogoContainer,
    FormContainer,
    StyledForm,
    StyledFormControl,
    StyledInput,
} from '../Forms.styles';
import { ReactComponent as LogoIcon } from '../../../assets/svgs/logo.svg';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');

    return (
        <FormContainer>
            <Notification />
            <LogoContainer>
                <LogoIcon />
            </LogoContainer>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                    username: '',
                }}
                validationSchema={validationsForm}
                onSubmit={({ email, password, username }) => {
                    dispatch(signupUser({ email, password, username }));
                }}
            >
                {({ values, handleChange, handleSubmit }) => (
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
                                onChange={e => {
                                    handleChange(e);
                                    setPassword(e.target.value);
                                }}
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

                        <StyledFormControl variant="standard">
                            <StyledInput
                                value={values.passwordConfirmation}
                                onChange={handleChange}
                                name="passwordConfirmation"
                                type="password"
                                placeholder="Confirm password"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                }
                            />
                        </StyledFormControl>
                        <ErrorMessage name="passwordConfirmation" />

                        <PasswordStrengthBar value={password} />

                        <StyledFormControl variant="standard">
                            <StyledInput
                                value={values.username}
                                onChange={handleChange}
                                name="username"
                                type="text"
                                placeholder="Your name"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AccountBoxIcon />
                                    </InputAdornment>
                                }
                            />
                        </StyledFormControl>
                        <ErrorMessage name="username" />

                        <GreenBtn type="submit" style={{ marginTop: '50px' }}>
                            Registration
                        </GreenBtn>
                        <Link to="/login">
                            <WhiteBtn type="button">Log In</WhiteBtn>
                        </Link>
                    </StyledForm>
                )}
            </Formik>
        </FormContainer>
    );
};

export default RegisterForm;
