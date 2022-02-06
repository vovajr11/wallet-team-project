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
    StyledContainer
} from './ModalAddTransaction.styles';
import { GreenBtn, WhiteBtn } from '../StyledComponents';
import { ReactComponent as AddIcon } from '../../assets/svgs/plus.svg';
import { ReactComponent as SubtractIcon } from '../../assets/svgs/subtract.svg';
import { ReactComponent as CloseIcon } from '../../assets/svgs/close.svg';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import expenses from './Categories/categories';
import {MenuProps} from './Select/select';

export default function ModalAddTransaction() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [category, setCategory] = useState('');
    const [date, setDate] = useState(new Date());
    const [isExpenseType, setIsExpenseType] = useState(false);

    const formik = useFormik({
        initialValues: {
            
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

    const expandIcon = props => {
        return <ExpandMore className={props.className} />;
    };

    return (
        <>
            <AddTransactionBtn onClick={handleOpen}>
                <AddIcon />
            </AddTransactionBtn>
            <StyledDialog open={open} onClose={handleClose}>
                <Form onSubmit={formik.handleSubmit}>
                    <CloseModalBtn onClick={handleClose}>
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
                            IconComponent={expandIcon}
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
                        <LocalizationProvider dateAdapter={AdapterDateFns} >
                            <StyledDatePicker
                                variant="standart"
                                inputFormat="dd.MM.yyyy"
                                mask={'__.__.____'}
                                value={date}
                                onChange={newValue => {
                                    setDate(newValue);
                                }}
                                renderInput={params => (
                                    <TextField variant="standard" {...params} />
                                )}
                            />
                        </LocalizationProvider>
                    </StyledBox>
                    <StyledInput
                        placeholder="Comments"
                        variant="standart"
                        type="text"
                        sx={{
                            '& .MuiInput-root': {
                                padding: '10px 20px 10px 20px',
                            },
                        }}
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
