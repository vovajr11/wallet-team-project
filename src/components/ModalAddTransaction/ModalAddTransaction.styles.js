import styled from '@emotion/styled';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { font, color, breakpoint } from '../GlobalStyles';

export const AddTransactionBtn = styled.button`
    color: ${color.white};
    width: 44px;
    height: 44px;
    background-color: ${color.green};
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 6px 15px rgb(36 204 167 / 50%);
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 85px;
    bottom: 40px;

    &:hover {
        transform: scale(1.15);
        transition: 0.3s linear;
    }

    @media screen and (max-width: ${breakpoint.tablet}) {
        position: fixed;
        right: 30px;
        bottom: 30px;
    }
    @media screen and (max-width: ${breakpoint.mobile}) {
        right: 20px;
    }
`;

export const AddIcon = styled.svg`
    width: 20px;
    height: 20px;
`;

export const StyledDialog = styled(Dialog)`
    .MuiBackdrop-root {
        background-color: rgba(0, 0, 0, 0.25);

        @media screen and (max-width: ${breakpoint.mobile}) {
            background-color: transparent;
        }
    }
    .MuiPaper-root {
        border-radius: 20px;
        max-width: 540px;
        padding: 40px 60px 60px 60px;

        @media screen and (max-width: ${breakpoint.mobile}) {
            position: fixed;
            top: 50px;
            border-radius: 0;
            box-shadow: none;
            padding-top: 20px;
        }
    }
`;

export const CloseModalBtn = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
    position: absolute;
    top: 20px;
    right: 20px;

    svg {
        width: 16px;
        height: 16px;

        &:hover {
            transform: scale(1.3);
            transition: 0.1s linear;
        }

        @media screen and (max-width: ${breakpoint.mobile}) {
            display: none;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    .MuiInput-root,
    .MuiMenu-root,
    .MuiPaper-root {
        font-family: ${font.secondary};
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
    }
    .MuiInput-underline:before {
        border-bottom: 1px solid #e0e0e0;
    }
    .MuiInput-underline:hover:not(.Mui-disabled):before {
        border-bottom: 3px solid #24cca7;
    }
    .MuiButtonBase-root {
        margin-right: 12px;
        color: #4a56e2;
    }
`;

export const DialogTitle = styled.h2`
    text-align: center;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
`;

export const Toggler = styled.div`
    display: flex;
    gap: 20px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
`;

export const ToggleP = styled.p`
    &.green {
        color: ${color.green};
    }
    &.pink {
        color: ${color.red};
    }

    &.grey {
        color: ${color.authGray};
    }

    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 1;
    font-family: ${font.secondary};
`;

export const ToggleLabel = styled.label`
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    > input:checked ~ div:first-of-type div {
        left: 37px;
        background-color: ${color.red};
        box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
    }
`;

export const ToggleInput = styled.input`
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
`;

export const ToggleBackground = styled.div`
    width: 80px;
    height: 40px;
    border-radius: 30px;
    background-color: ${color.white};
    border: 1px solid #e0e0e0;
    opacity: 1;
    transition: background-color 200ms ease-in-out;
`;

export const ToggleBtn = styled.div`
    position: absolute;
    top: -2px;
    left: -1px;
    width: 44px;
    height: 44px;
    background-color: ${color.green};
    border-radius: 22px;
    transition: left 250ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
`;

export const StyledSelect = styled(Select)`
    width: 100%;

    .MuiSelect-select {
        padding: 10px 20px 10px 20px;
        line-height: 23px;
    }
    .MuiInput-input:focus {
        background-color: transparent;
    }
`;

export const Placeholder = styled.p`
    font-family: ${font.secondary};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: ${color.grey};
`;

export const StyledBox = styled(Box)`
    display: flex;
    column-gap: 30px;
    width: 100%;

    .MuiInput-input {
        text-align: center;
        padding-bottom: 10px;
        font-size: 18px;
        line-height: 23px;

        @media screen and (max-width: ${breakpoint.mobile}) {
            text-align: left;
            padding: 10px 20px 10px 20px;
        }
    }

    @media screen and (max-width: ${breakpoint.mobile}) {
        flex-direction: column;
        row-gap: 40px;
    }
`;

export const StyledInput = styled(Input)`
    padding: 10px 20px 10px 20px;

    @media screen and (max-width: ${breakpoint.mobile}) {
        padding-bottom: 50px;
    }
`;

export const StyledContainer = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
