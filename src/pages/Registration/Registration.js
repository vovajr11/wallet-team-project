import React from 'react';
import { RegisterForm } from '../../components/Forms/RegisterForm';
import {
    Container,
    SectionRight,
    SectionLeft,
    TitleApp,
} from '../../components/Forms/Forms.styles';
import { ReactComponent as PreviewPicture } from '../../assets/svgs/preview-registration-picture.svg';

const Registration = () => {
    return (
        <Container>
            <SectionLeft>
                <PreviewPicture width="452" height="412" />

                <TitleApp>Finance App</TitleApp>
            </SectionLeft>

            <SectionRight>
                <RegisterForm />
            </SectionRight>
        </Container>
    );
};

export default Registration;
