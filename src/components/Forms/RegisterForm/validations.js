import { object, string, ref } from 'yup';

const validationsForm = object({
    email: string().email('Invalid email').required('Required'),
    password: string()
        .min(6, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Password is required'),
    passwordConfirmation: string()
        .oneOf([ref('password'), null], 'Passwords must match')
        .required('Required'),
    username: string()
        .min(1, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Required'),
});

export default validationsForm;
