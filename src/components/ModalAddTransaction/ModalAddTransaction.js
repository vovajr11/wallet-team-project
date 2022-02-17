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
import expenses from './Categories/categories';
import { MenuProps } from './Select/select';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AddTransactionSchema from './validation';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalAddTransactionOpen } from '../../redux/global/globalSlice';
import { createTransaction } from '../../redux/transactions/transactionsSlice';
import {
    returnCategories,
    getCategories,
    categoriesSelector,
} from '../../redux/categories/categoriesSlice';

export default function ModalAddTransaction() {
    const dispatch = useDispatch();
    const open = useSelector(state => state.global.isModalAddTransactionOpen);
    const handleClose = () => dispatch(setIsModalAddTransactionOpen(false));
    const handleOpen = () => dispatch(setIsModalAddTransactionOpen(true));

    const [income, setIncome] = useState({});
    const [expenses, setExpenses] = useState([]);

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
            dispatch(createTransaction());
        },
    });

    const handleInputChange = event => {
        formik.setFieldValue('isExpenseType', event.target.checked);
    };

    const handleDataChange = date => {
        formik.setFieldValue('transactionDate', date.toISOString());
    };

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
                            value={formik.values.categoryId}
                            onChange={formik.handleChange}
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
                            {expenses.map(category => (
                                <MenuItem value={category} key={category}>
                                    {category}
                                </MenuItem>
                            ))}
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
