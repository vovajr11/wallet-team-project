import styled from '@emotion/styled';

export const LoaderOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: ${props => (props.fullscreen ? 'fixed' : 'absolute')};
    top: 0;
    left: 0;
    backdrop-filter: blur(5px) saturate(200%);
    z-index: 999;
`;

export const LoaderW = styled.div`
    position: fixed;
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
