import React from 'react';
import { LoginForm } from '../../components/Forms/LoginForm';
import {
    Container,
    SectionRight,
    SectionLeft,
    TitleApp,
} from '../../components/Forms/Forms.styles';
import { ReactComponent as PreviewPicture } from '../../assets/svgs/preview-login-picture.svg';

const Login = () => {
    return (
        <Container>
            <SectionLeft>
                <PreviewPicture width="432" height="420" />

                <TitleApp>Finance App</TitleApp>
            </SectionLeft>

            <SectionRight>
                <LoginForm />
            </SectionRight>
        </Container>
    );
};

export default Login;
