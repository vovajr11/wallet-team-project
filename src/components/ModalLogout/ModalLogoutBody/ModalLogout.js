import React from 'react';
import { ModalLogoutBtn } from '../ModalLogoutBtn';
import Modal from '@mui/material/Modal';
import { WhiteBtn } from '../../StyledComponents';
import {
    ModalCaption,
    ModalBtns,
    StyledModal,
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
                <StyledBox>
                    <StyledClose onClick={handleClose} />
                    <ModalCaption>
                        Are you sure, you want to logout?
                    </ModalCaption>
                    <ModalBtns>
                        <WhiteBtn>Yes</WhiteBtn>
                        <WhiteBtn>No</WhiteBtn>
                    </ModalBtns>
                </StyledBox>
            </Modal>
        </>
    );
}
