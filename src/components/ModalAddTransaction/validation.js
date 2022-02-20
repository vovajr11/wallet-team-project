import * as Yup from 'yup';

const AddTransactionSchema = Yup.object().shape({
    amount: Yup.number()
        .positive("Amount can't be negative and null")
        .required('This field is required'),
    transactionDate: Yup.string().required('This field is required'),
});

export default AddTransactionSchema;
