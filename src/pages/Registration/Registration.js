import React from 'react';
import { Grid } from '@mui/material';
import { RegisterForm } from '../../components/Forms/RegisterForm';
import { SectionRight, SectionLeft } from '../../components/StyledComponents';

const Registration = props => {
    return (
        <Grid container height="100vh" alignItems="center">
            <SectionLeft>
                {/* <svg width={435} height={420}>
                    <use xlinkHref="assets/svg/pictures-min.svg#preview-picture" />
                </svg> */}
                <h2>Finance App</h2>
            </SectionLeft>

            <SectionRight>
                <RegisterForm />
            </SectionRight>
        </Grid>
    );
};

export default Registration;
