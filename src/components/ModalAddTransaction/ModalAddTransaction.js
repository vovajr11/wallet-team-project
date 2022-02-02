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
} from './ModalAddTransaction.styles';
import { ReactComponent as AddIcon } from '../../assets/svgs/plus.svg';
import { ReactComponent as CloseIcon } from '../../assets/svgs/close.svg';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import expenses from './categories';

export default function ModalAddTransaction() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [category, setCategory] = useState('');
    const [date, setDate] = useState(new Date());
    const [isExpenseType, setExpenseType] = useState(false);

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
        setExpenseType(event.target.checked);
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
                                    <AddIcon />
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
                            <Select
                                sx={{ width: '100%' }}
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                                variant="standard"
                                renderValue={selected => {
                                    if (selected.length === 0) {
                                        return <p>Select a category</p>;
                                    }
                                    return selected.join(', ');
                                }}
                                //TODO FIX PLACEHOLDER
                            >
                                {expenses.map(key => (
                                    <MenuItem value={key} key={key}>
                                        {key}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}

                        <TextField
                            id="standard-basic"
                            label="0.00"
                            variant="standard"
                        />
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}
