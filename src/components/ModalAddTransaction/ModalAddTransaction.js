import React, { useState } from 'react';
import { AddTransactionBtn} from './ModalAddTransaction.styles';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {ReactComponent as AddIcon} from '../../assets/svgs/plus.svg';

export default function ModalAddTransaction() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <AddTransactionBtn onClick={handleOpen}>
                <AddIcon />
            </AddTransactionBtn>
            <Modal open={open} onClose={handleClose}>
                <Box />
            </Modal>
        </>
    );
}
