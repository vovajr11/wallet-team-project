import React, { useState } from 'react';
import {
    AddTransactionBtn,
    Toggler,
    ToggleP,
    ToggleLabel,
    ToggleInput,
    ToggleBackground,
    ToggleBtn,
} from './ModalAddTransaction.styles';
import { ReactComponent as AddIcon } from '../../assets/svgs/plus.svg';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const defaultState = {
    date: new Date(),
    type: false,
    amount: '',
    comment: '',
    category: '',
};

export default function ModalAddTransaction() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [transaction, setTransaction] = useState(defaultState);

    const handleInputChange = event => {
        const name = event.target.name;
        const value =
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value;
        updateTransaction(name, value);
        if (event.target.type === 'checkbox') {
            updateTransaction('category', '');
        }
    };

    const updateTransaction = (name, value) => {
        setTransaction(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <AddTransactionBtn onClick={handleOpen}>
                <AddIcon />
            </AddTransactionBtn>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Transaction</DialogTitle>
                <DialogActions>
                    <Toggler>
                        <ToggleP
                            className={!transaction.type ? 'green' : 'grey'}
                        >
                            Income
                        </ToggleP>
                        <ToggleLabel>
                            <ToggleInput
                                type="checkbox"
                                name="type"
                                onChange={handleInputChange}
                                checked={transaction.type}
                            ></ToggleInput>
                            <ToggleBackground>
                                <ToggleBtn>
                                    <AddIcon />
                                </ToggleBtn>
                            </ToggleBackground>
                        </ToggleLabel>
                        <ToggleP className={transaction.type ? 'pink' : 'grey'}>
                            Expences
                        </ToggleP>
                    </Toggler>
                </DialogActions>
                <DialogContent></DialogContent>
            </Dialog>
        </>
    );
}
