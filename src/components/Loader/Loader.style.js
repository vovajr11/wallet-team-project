import styled from '@emotion/styled';

export const LoaderW = styled.div`
    position: fixed;
    top: calc(50% - 22.5px);
    left: calc(50% - 22.5px);
    z-index: 999;

    svg {
        stroke: #24cca7;
        circle {
            stroke: #4a56e2;
            stroke-opacity: 1;
        }
    }
`;
