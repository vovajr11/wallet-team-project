import styled from '@emotion/styled';

export const LoaderOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: ${props => (props.fullscreen ? 'fixed' : 'absolute')};
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
