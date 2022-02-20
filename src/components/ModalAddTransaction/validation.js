import * as Yup from 'yup';

const AddTransactionSchema = Yup.object().shape({
    amount: Yup.number()
        .positive('Amount must be')
        .required('This field is required'),
    transactionDate: Yup.string().required('This field is required')
});

export default AddTransactionSchema;
