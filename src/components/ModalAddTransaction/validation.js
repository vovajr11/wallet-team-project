import * as Yup from 'yup';

const AddTransactionSchema = Yup.object().shape({
    amount: Yup.number()
        .positive("Amount can't be negative")
        .required('This field is required'),
    transactionDate: Yup.string().required('This field is required'),
    categoryId: Yup.string().when('isExpenseType', {
        is: true,
        then: Yup.string().required('Please choose a category'),
    }),
});

export default AddTransactionSchema;
