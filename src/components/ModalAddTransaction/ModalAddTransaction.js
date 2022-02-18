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
import { useFormik } from 'formik';
import DatePicker from '@mui/lab/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ThemeProvider } from '@mui/material/styles';
import { MenuProps } from './Select/select';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AddTransactionSchema from './validation';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalAddTransactionOpen } from '../../redux/global/globalSlice';
import { createTransaction } from '../../redux/transactions/transactionsSlice';
import { getCategories } from '../../redux/categories/categoriesSlice';
import { ca } from 'date-fns/locale';

export default function ModalAddTransaction() {
    const dispatch = useDispatch();
    const open = useSelector(state => state.global.isModalAddTransactionOpen);
    const handleClose = () => dispatch(setIsModalAddTransactionOpen(false));
    const handleOpen = () => {
        dispatch(setIsModalAddTransactionOpen(true))
    };

    const categories = useSelector(state => state.categories.items);
    const filterArr = (arr) => arr.filter(value => value.type === 'EXPENSE');

    const [income, setIncome] = useState({});
    const [expenses, setExpenses] = useState(filterArr(categories));


    const disp = async () =>
        setExpenses(filterArr(categories));

    useEffect(() => {
        dispatch(getCategories());
        setIncome(categories.find(value => value.type === 'INCOME'));
        disp()
        console.log(expenses);
        console.log("first", categories);
    }, []);


    const formik = useFormik({
        initialValues: {
            isExpenseType: false,
            transactionDate: new Date().toISOString,
            type: 'INCOME',
            categoryId: '',
            comment: '',
            amount: 0,
        },
        validationSchema: AddTransactionSchema,
        onSubmit: value => {
            console.log(value)
            // dispatch(createTransaction());
        },
    });

    const handleClick = (e) => {
        // e.target.value = "Selectedd";
        console.log(e.target);
        formik.handleChange();
    }

    const handleInputChange = event => {
        formik.setFieldValue('isExpenseType', event.target.checked);
        const categoryId = event.target.checked ? '' : expenses.id;
        formik.setFieldValue('categoryId', categoryId);
    };

    const handleDataChange = date => {
        formik.setFieldValue('transactionDate', date.toISOString());
    };

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const renderItems = () => {
        return categories.map(category => (
            category.type === "EXPENSE" ?
                <MenuItem style={{ fontFamily: `"Abel",sans-serif` }} value={category.name} key={category.id}>
                    {category.name}
                </MenuItem>
                : null
        ))
    };

    return (
        <>
            <AddTransactionBtn onClick={handleOpen}>
                <AddIcon />
            </AddTransactionBtn>
            <StyledDialog
                open={open}
                onClose={handleClose}
                fullScreen={fullScreen}
            >
                <Form onSubmit={formik.handleSubmit}>
                    <CloseModalBtn onClick={handleClose} type="button">
                        <CloseIcon />
                    </CloseModalBtn>
                    <DialogTitle>Add transaction</DialogTitle>

                    <Toggler>
                        <ToggleP
                            className={
                                !formik.values.isExpenseType ? 'green' : 'grey'
                            }
                        >
                            Income
                        </ToggleP>
                        <ToggleLabel>
                            <ToggleInput
                                type="checkbox"
                                name="type"
                                onChange={handleInputChange}
                                checked={formik.values.isExpenseType}
                            ></ToggleInput>
                            <ToggleBackground>
                                <ToggleBtn>
                                    {!formik.values.isExpenseType ? (
                                        <AddIcon />
                                    ) : (
                                        <SubtractIcon />
                                    )}
                                </ToggleBtn>
                            </ToggleBackground>
                        </ToggleLabel>
                        <ToggleP
                            className={
                                formik.values.isExpenseType ? 'pink' : 'grey'
                            }
                        >
                            Expences
                        </ToggleP>
                    </Toggler>
                    {formik.values.isExpenseType && (
                        <StyledSelect
                            MenuProps={MenuProps}
                            displayEmpty
                            name='category'
                            value={formik.values.categoryId}
                            // onChange={formik.handleChange}
                            onChange={handleClick}
                            variant="standard"
                            IconComponent={ExpandMore}
                            renderValue={selected => {
                                if (selected.length === 0) {
                                    return (
                                        <Placeholder>
                                            Select a category
                                        </Placeholder>
                                    );
                                }
                                return selected;
                            }}
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
                            value={formik.values.amount}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.amount &&
                                Boolean(formik.errors.amount)
                            }
                            helperText={
                                formik.touched.amount && formik.errors.amount
                            }
                        />
                        <ThemeProvider theme={theme}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    variant="standart"
                                    inputFormat="dd.MM.yyyy"
                                    mask={'__.__.____'}
                                    name={"transactionDate"}
                                    value={formik.values.transactionDate}
                                    onChange={handleDataChange}
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
                        value={formik.values.comment}
                        onChange={formik.handleChange}
                    />
                    <StyledContainer>
                        <GreenBtn type="submit">Add</GreenBtn>
                        <WhiteBtn type="button" onClick={handleClose}>
                            Cancel
                        </WhiteBtn>
                    </StyledContainer>
                </Form>
            </StyledDialog>
        </>
    );
}
