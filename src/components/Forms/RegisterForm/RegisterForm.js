import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import { authOperations } from '../../../redux/auth';
import { GreenBtn, WhiteBtn, LogoContainer } from '../../StyledComponents';
import {
    FormContainer,
    StyledForm,
    StyledFormControl,
    StyledInput,
} from '../Forms.styles';
import validationsForm from './validations';

const Form = props => {
    const { values, touched, errors, handleChange, handleSubmit } = props;

    return (
        <FormContainer>
            <LogoContainer>
                <svg width={40} height={40}>
                    <use xlinkHref="assets/svg/pictures-min.svg#wallet" />
                </svg>
                <h2>Wallet</h2>
            </LogoContainer>

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
                {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                ) : null}

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
                {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                ) : null}

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
                {errors.passwordConfirmation && touched.passwordConfirmation ? (
                    <div>{errors.passwordConfirmation}</div>
                ) : null}

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
                {errors.username && touched.username ? (
                    <div>{errors.username}</div>
                ) : null}

                <GreenBtn type="submit">Registration</GreenBtn>
                <WhiteBtn type="button">
                    <Link to="/login">Log In</Link>
                </WhiteBtn>
            </StyledForm>
        </FormContainer>
    );
};

const RegisterForm = withFormik({
    mapPropsToValues: ({ email, password, passwordConfirmation, username }) => {
        return {
            email: email || '',
            password: password || '',
            passwordConfirmation: passwordConfirmation || '',
            username: username || '',
        };
    },

    validationSchema: Yup.object().shape(validationsForm),

    handleSubmit: ({ email, password, username }, { props }) => {
        props.registerUser({ email, password, username });
    },
})(Form);

const mapDispatchToProps = {
    registerUser: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterForm);