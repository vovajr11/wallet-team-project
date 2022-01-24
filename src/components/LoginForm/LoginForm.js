import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { authOperations } from '../../redux/auth';
import { GreenBtn, WhiteBtn } from '../StyledComponents';
import {
    StyledForm,
    StyledFormControl,
    StyledInput,
} from '../StyledComponents';
import validationsForm from './validations';

const Form = props => {
    const { values, touched, errors, handleChange, handleSubmit } = props;

    return (
        <div>
            <h2>Login view</h2>

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
        </div>
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
