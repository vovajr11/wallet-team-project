import LogoutIcon from '@mui/icons-material/Logout';

import {
    ModalLogoutBtn,
    LogoutIconW,
    LogoutBtnText,
} from './ModalLogoutBtn.style';

const ModalLogoutBtnInner = ({ modalTrigger }) => {
    return (
        <>
            <ModalLogoutBtn onClick={modalTrigger}>
                <LogoutIconW>
                    <LogoutIcon style={{ fill: '#bdbdbd' }} />
                </LogoutIconW>
                <LogoutBtnText>Exit</LogoutBtnText>
            </ModalLogoutBtn>
        </>
    );
};

export default ModalLogoutBtnInner;
