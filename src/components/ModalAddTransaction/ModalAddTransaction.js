import React, { useState } from 'react';
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
    StyledDatePicker,
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
import * as yup from 'yup';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './DatePicker/DatePicker';
import expenses from './Categories/categories';
import { MenuProps } from './Select/select';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ModalAddTransaction() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [category, setCategory] = useState('');
    const [date, setDate] = useState(new Date());
    const [isExpenseType, setIsExpenseType] = useState(false);

    const formik = useFormik({
        initialValues: {
            date: new Date(),
            type: false,
            amount: '',
            comment: '',
            category: '+',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const handleInputChange = event => {
        setIsExpenseType(event.target.checked);
    };

    const handleSelectChange = event => {
        setCategory(event.target.value);
    };

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <AddTransactionBtn onClick={handleOpen}>
                <AddIcon />
            </AddTransactionBtn>
            <StyledDialog open={open} onClose={handleClose} fullScreen={fullScreen}>
                <Form onSubmit={formik.handleSubmit}>
                    <CloseModalBtn onClick={handleClose} type='button'>
                        <CloseIcon />
                    </CloseModalBtn>
                    <DialogTitle>Add transaction</DialogTitle>

                    <Toggler>
                        <ToggleP className={!isExpenseType ? 'green' : 'grey'}>
                            Income
                        </ToggleP>
                        <ToggleLabel>
                            <ToggleInput
                                type="checkbox"
                                name="type"
                                onChange={handleInputChange}
                                checked={isExpenseType}
                            ></ToggleInput>
                            <ToggleBackground>
                                <ToggleBtn>
                                    {!isExpenseType ? (
                                        <AddIcon />
                                    ) : (
                                        <SubtractIcon />
                                    )}
                                </ToggleBtn>
                            </ToggleBackground>
                        </ToggleLabel>
                        <ToggleP className={isExpenseType ? 'pink' : 'grey'}>
                            Expences
                        </ToggleP>
                    </Toggler>
                    {isExpenseType && (
                        <StyledSelect
                            MenuProps={MenuProps}
                            displayEmpty
                            value={category}
                            onChange={handleSelectChange}
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
                        <Input
                            placeholder="0.00"
                            variant="standart"
                            type="number"
                        />
                        <ThemeProvider theme={theme}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <StyledDatePicker
                                    variant="standart"
                                    inputFormat="dd.MM.yyyy"
                                    mask={'__.__.____'}
                                    value={date}
                                    onChange={newValue => {
                                        setDate(newValue);
                                    }}
                                    renderInput={params => (
                                        <TextField
                                            variant="standard"
                                            {...params}
                                        />
                                    )}
                                    components={{
                                        OpenPickerIcon: DateRangeIcon
                                    }}
                                />
                            </LocalizationProvider>
                        </ThemeProvider>
                    </StyledBox>
                    <StyledInput
                        placeholder="Comments"
                        variant="standart"
                        type="text"
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
