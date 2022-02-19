import React, { useState, useEffect } from 'react';
import {
    AddTransactionBtn,
    StyledDialog,
    Form,
    CloseModalBtn,
    DialogTitle,
    Toggler,
    ToggleP,
    ToggleLabel,
    ToggleInput,
    ToggleBackground,
    ToggleBtn,
    Placeholder,
    StyledSelect,
    StyledBox,
    StyledInput,
    StyledContainer,
} from './ModalAddTransaction.styles';
import { GreenBtn, WhiteBtn } from '../StyledComponents';
import { ReactComponent as AddIcon } from '../../assets/svgs/plus.svg';
import { ReactComponent as SubtractIcon } from '../../assets/svgs/subtract.svg';
import { ReactComponent as CloseIcon } from '../../assets/svgs/close.svg';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useFormik, Formik } from 'formik';
import DatePicker from '@mui/lab/DatePicker';
import { MenuItem, TextField, useMediaQuery } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { MenuProps } from './Select/select';
import AddTransactionSchema from './validation';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalAddTransactionOpen } from '../../redux/global/globalSlice';
import { createTransaction } from '../../redux/transactions/transactionsSlice';
import { getCategories } from '../../redux/categories/categoriesSlice';

export default function ModalAddTransaction() {
    const dispatch = useDispatch();
    const open = useSelector(state => state.global.isModalAddTransactionOpen);
    const toggleClose = () => dispatch(setIsModalAddTransactionOpen(!open));

    const categories = useSelector(state => state.categories.items);
    const filterArr = arr => arr.filter(value => value.type === 'EXPENSE');

    const [income, setIncome] = useState({});
    const [expenses, setExpenses] = useState(filterArr(categories));

    const disp = async () => setExpenses(filterArr(categories));

    useEffect(() => {
        dispatch(getCategories());
        setIncome(categories.find(value => value.type === 'INCOME'));
        disp();
    }, []);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const renderItems = () => {
        return categories.map(category =>
            category.type === 'EXPENSE' ? (
                <MenuItem
                    style={{ fontFamily: `"Abel",sans-serif` }}
                    value={category.name}
                    key={category.id}
                >
                    {category.name}
                </MenuItem>
            ) : null,
        );
    };

    const filterCategoriesObj = arr => {
        const resultObj = {};
        const nameArr = arr.map(elem => elem.name);
        const idArr = arr.map(elem => elem.id);
        for (let i = 0; i < arr.length; i++) {
            resultObj[nameArr[i]] = idArr[i];
        }
        return resultObj;
    };

    const categoriesObj = filterCategoriesObj(categories);

    const [category, setCategory] = useState('');

    const [value, setValue] = useState(new Date().toISOString());

    console.log(value, 'value');

    return (
        <>
            <AddTransactionBtn onClick={toggleClose}>
                <AddIcon />
            </AddTransactionBtn>
            <StyledDialog
                open={open}
                onClose={toggleClose}
                fullScreen={fullScreen}
            >
                <Formik
                    initialValues={{
                        transactionDate: '',
                        type: 'INCOME',
                        categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
                        comment: '',
                        amount: 0,
                    }}
                    validationSchema={AddTransactionSchema}
                    onSubmit={values => {
                        dispatch(createTransaction(values));
                    }}
                >
                    {({
                        values,
                        handleChange,
                        handleSubmit,
                        touched,
                        errors,
                        handleBlur,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <CloseModalBtn onClick={toggleClose} type="button">
                                <CloseIcon />
                            </CloseModalBtn>
                            <DialogTitle>Add transaction</DialogTitle>

                            <Toggler>
                                <ToggleP
                                    className={
                                        !values.isExpenseType ? 'green' : 'grey'
                                    }
                                >
                                    Income
                                </ToggleP>
                                <ToggleLabel>
                                    <ToggleInput
                                        type="checkbox"
                                        name="type"
                                        onChange={handleChange}
                                        checked={values.isExpenseType}
                                    ></ToggleInput>
                                    <ToggleBackground>
                                        <ToggleBtn>
                                            {!values.isExpenseType ? (
                                                <AddIcon />
                                            ) : (
                                                <SubtractIcon />
                                            )}
                                        </ToggleBtn>
                                    </ToggleBackground>
                                </ToggleLabel>
                                <ToggleP
                                    className={
                                        values.isExpenseType ? 'pink' : 'grey'
                                    }
                                >
                                    Expences
                                </ToggleP>
                            </Toggler>
                            {values.isExpenseType && (
                                <StyledSelect
                                    MenuProps={MenuProps}
                                    displayEmpty
                                    name="category"
                                    value={category}
                                    onChange={handleChange}
                                    variant="standard"
                                    IconComponent={ExpandMore}
                                >
                                    {renderItems()}
                                </StyledSelect>
                            )}
                            <StyledBox>
                                <TextField
                                    name="amount"
                                    id="amount"
                                    placeholder="0.00"
                                    variant="standard"
                                    type="number"
                                    value={values.amount}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={
                                        touched.amount && Boolean(errors.amount)
                                    }
                                    helperText={touched.amount && errors.amount}
                                />
                                <ThemeProvider theme={theme}>
                                    <LocalizationProvider
                                        dateAdapter={AdapterDateFns}
                                    >
                                        <DatePicker
                                            variant="standart"
                                            inputFormat="dd.MM.yyyy"
                                            mask={'__.__.____'}
                                            name={'transactionDate'}
                                            value={value}
                                            onChange={newValue => {
                                                values.transactionDate =
                                                    newValue;
                                                setValue(newValue);
                                            }}
                                            renderInput={params => (
                                                <TextField
                                                    variant="standard"
                                                    {...params}
                                                />
                                            )}
                                            components={{
                                                OpenPickerIcon: DateRangeIcon,
                                            }}
                                        />
                                    </LocalizationProvider>
                                </ThemeProvider>
                            </StyledBox>
                            <StyledInput
                                placeholder="Comments"
                                name="comment"
                                variant="standart"
                                type="text"
                                value={values.comment}
                                onChange={handleChange}
                            />
                            <StyledContainer>
                                <GreenBtn type="submit">Add</GreenBtn>
                                <WhiteBtn type="button" onClick={toggleClose}>
                                    Cancel
                                </WhiteBtn>
                            </StyledContainer>
                        </Form>
                    )}
                </Formik>
            </StyledDialog>
        </>
    );
}
