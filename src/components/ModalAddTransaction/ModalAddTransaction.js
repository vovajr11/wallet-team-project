import React, { useState } from 'react';
import { AddTransactionBtn, AddIcon } from './ModalAddTransaction.styles';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export default function ModalAddTransaction() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <AddTransactionBtn onClick={handleOpen}>
                <AddIcon>
                    <use xlinkHref="assets/svg/pictures.svg#add-cross" />
                </AddIcon>
            </AddTransactionBtn>
            <Modal open={open} onClose={handleClose}>
                <Box />
            </Modal>
        </>
    );
}
