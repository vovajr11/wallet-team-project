import * as Yup from 'yup';

const validationsForm = {
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Password is required'),
};

export default validationsForm;
