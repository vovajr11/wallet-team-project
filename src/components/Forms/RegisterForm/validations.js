import * as Yup from 'yup';

const validationsForm = {
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Password is required'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    username: Yup.string()
        .min(1, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Required'),
};

export default validationsForm;
