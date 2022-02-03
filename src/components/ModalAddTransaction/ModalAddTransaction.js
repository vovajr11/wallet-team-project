import React, { useState } from 'react';
import {
    AddTransactionBtn,
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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import expenses from './categories';

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

    const expandIcon = props => {
        return <ExpandMore className={props.className} />;
    };

    return (
        <>
            <AddTransactionBtn onClick={handleOpen}>
                <AddIcon />
            </AddTransactionBtn>
            <Dialog open={open} onClose={handleClose}>
                <CloseModalBtn onClick={handleClose}>
                    <CloseIcon />
                </CloseModalBtn>
                <DialogTitle>Add transaction</DialogTitle>
                <DialogActions>
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
                </DialogActions>
                <DialogContent>
                    <form onSubmit={formik.handleSubmit}>
                        {isExpenseType && (
                            <StyledSelect
                                sx={{ width: '100%' }}
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
                        <Box>
                            <Input
                                placeholder="0.00"
                                variant="standart"
                                type="number"
                            />
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    variant="standart"
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
                                />
                            </LocalizationProvider>
                        </Box>
                        <Input
                            placeholder="Comments"
                            variant="standart"
                            type="text"
                        />
                        <GreenBtn type="submit">Add</GreenBtn>
                        <WhiteBtn type="button" onClick={handleClose}>
                            Cancel
                        </WhiteBtn>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}
