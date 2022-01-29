import React from 'react';
import { LoginForm } from '../../components/Forms/LoginForm';
import { Grid } from '@mui/material';
import { SectionRight, SectionLeft } from '../../components/StyledComponents';

const Login = () => {
    return (
        <Grid container height="100vh" alignItems="center">
            <SectionLeft>
                {/* <svg width={435} height={420}>
                    <use xlinkHref="assets/svg/pictures-min.svg#preview-picture" />
                </svg> */}
                <h2>Finance App</h2>
            </SectionLeft>

            <SectionRight>
                <LoginForm />
            </SectionRight>
        </Grid>
    );
};

export default Login;
