import styled from '@emotion/styled';

const Button = styled.button`
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 20px;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
`;

export const GreenBtn = styled(Button)`
    background: #24cca7;
    color: #ffffff;
    margin-bottom: 20px;
`;

export const WhiteBtn = styled(Button)`
    background: #ffffff;
    border: 1px solid #4a56e2;

    a {
        color: #4a56e2;
    }
`;

const CenterElement = `
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const SectionLeft = styled.section`
    ${CenterElement}
    flex-grow: 1;

    & > h2 {
        margin-top: 28px;
        color: #000000;
        font-weight: normal;
        font-size: 30px;
        line-height: 45px;
    }
`;

export const SectionRight = styled.section`
    ${CenterElement}
    width: 720px;
    background-color: #808080;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;

    & > h2 {
        margin-left: 20px;
        color: #000000;
        font-size: 30px;
        line-height: 45px;
        font-weight: bold;
    }
`;
