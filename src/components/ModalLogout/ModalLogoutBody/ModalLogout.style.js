import styled from '@emotion/styled';

export const ModalBtns = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        margin-bottom: 20px;
    }

    button:last-child {
        margin-bottom: 0px;
    }
`;

export const LogoutBtnText = styled.span`
    font: 18px/1.33 'Abel';

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const ModalCaption = styled.h3`
    font: 30px/1.3 'Poppins';
    text-align: center;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
        font: 24px/1.2 'Poppins';
    }
`;

/* material css */
export const StyledBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '540px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: '65px 40px',
    borderRadius: '12px',
};

export const StyledClose = {
    position: 'absolute',
    top: 20,
    right: 20,
};
/* end material css */
