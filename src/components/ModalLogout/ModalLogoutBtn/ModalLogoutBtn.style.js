import styled from '@emotion/styled';

export const ModalLogoutBtn = styled.button`
    background: none;
    display: flex;
    align-items: center;
    border: none;

    &:hover {
        cursor: pointer;
    }
`;

export const LogoutIconW = styled.span`
    padding: 0 8px 0 10px;
`;

export const LogoutBtnText = styled.span`
    font: 18px/1.33 'Abel';
    color: #bdbdbd;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
