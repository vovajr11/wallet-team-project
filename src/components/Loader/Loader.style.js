import styled from '@emotion/styled';

export const LoaderOverlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    width: ${props => (props.fullscreen ? '100vw' : '100%')};
    height: ${props => (props.fullscreen ? '100vh' : 'auto')};
    position: ${props => (props.fullscreen ? 'fixed' : 'relative')};
    top: 0;
    left: 0;
    background-color: ${props =>
        props.fullscreen ? 'rgba(0, 0, 0, 0.5)' : 'none'};
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    z-index: 998;
`;

export const LoaderW = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;

    svg {
        stroke: ${props => props.secondaryColor};
        circle {
            stroke: ${props => props.primaryColor};
            stroke-opacity: 1;
        }
    }
`;
