import * as Yup from 'yup';

const AddTransactionSchema = Yup.object().shape({
    amount: Yup.number()
        .positive("Amount can't be negative")
        .required('This field is required'),
    date: Yup.string().required('This field is required').max(new Date()),
});

export default AddTransactionSchema;
