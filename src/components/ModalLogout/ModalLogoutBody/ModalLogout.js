import React from 'react';
import { useDispatch } from 'react-redux';

import { signOutUser } from '../../../redux/auth/authAPI';
import { setIsModalLogoutOpen } from '../../../redux/global/globalSlice';

import { ModalLogoutBtn } from '../ModalLogoutBtn';
import Modal from '@mui/material/Modal';
import { WhiteBtn } from '../../StyledComponents';

import {
    ModalCaption,
    ModalBtns,
    StyledBox,
    StyledClose,
} from './ModalLogout.style';

export default function ModalLogout() {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(true);
        dispatch(setIsModalLogoutOpen(true));
    };
    const handleClose = () => {
        setOpen(false);
        dispatch(setIsModalLogoutOpen(false));
    };

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
                        <WhiteBtn
                            onClick={({ email, password }) => {
                                dispatch(signOutUser({ email, password }));
                            }}
                        >
                            Yes
                        </WhiteBtn>
                        <WhiteBtn onClick={handleClose}>No</WhiteBtn>
                    </ModalBtns>
                </StyledBox>
            </Modal>
        </>
    );
}
