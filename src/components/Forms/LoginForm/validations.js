import { object, string } from 'yup';

const validationsForm = object({
    email: string().email('Invalid email').required('Required'),
    password: string()
        .min(6, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Password is required'),
});

export default validationsForm;
