import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
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

                <GreenBtn type="submit">Log in</GreenBtn>
                <WhiteBtn type="button">
                    <Link to="/register">Registration</Link>
                </WhiteBtn>
            </StyledForm>
        </FormContainer>
    );
};

const LoginForm = withFormik({
    mapPropsToValues: ({ email, password }) => {
        return {
            email: email || '',
            password: password || '',
        };
    },

    validationSchema: Yup.object().shape(validationsForm),

    handleSubmit: ({ email, password }, { props }) => {
        props.logIn({ email, password });
    },
})(Form);

const mapDispatchToProps = {
    logIn: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginForm);
