import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { ModalLogoutBtn } from '../ModalLogoutBtn';

import { WhiteBtn } from '../../StyledComponents';
import {
    ModalCaption,
    ModalBtns,
    StyledBox,
    StyledClose,
} from './ModalLogout.style';

export default function ModalLogout() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <ModalLogoutBtn modalTrigger={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={StyledBox}>
                    <CloseIcon onClick={handleClose} sx={StyledClose} />
                    <ModalCaption>
                        Are you sure, you want to logout?
                    </ModalCaption>
                    <ModalBtns>
                        <WhiteBtn>Yes</WhiteBtn>
                        <WhiteBtn>No</WhiteBtn>
                    </ModalBtns>
                </Box>
            </Modal>
        </>
    );
}
