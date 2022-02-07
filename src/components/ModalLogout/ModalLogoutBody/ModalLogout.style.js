import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import { device, font, color } from '../../GlobalStyles';

export const StyledBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${color.white};
    width: 100%;
    max-width: 540px;
    padding: 65px 40px;
    border-radius: 12px;

    @media screen and (${device.mobile}) {
        height: 100%;
        width: 100%;
        border-radius: 0;
        overflow-y: auto;
    }
`;

export const StyledClose = styled(CloseIcon)`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`;

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
    font: 18px/1.33 ${font.secondary};

    @media screen and (${device.mobile}) {
        display: none;
    }
`;

export const ModalCaption = styled.h3`
    font: 30px/1.3 ${font.primary};
    text-align: center;
    margin-bottom: 40px;

    @media screen and (${device.mobile}) {
        font: 24px/1.2 ${font.primary};
    }
`;
