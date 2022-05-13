import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from "styled-components";
import GlobalStyles from './global-styles';
const NODE_MOUNT = document.getElementById('app');

interface TitleProps {
    size?: 'Small' | 'Medium' | 'Large';
}

const SIZE_TO_FONE_SIZE = {
    Large: '50px',
    Medium: '30px',
    Small: '14px',
};

const Title = styled.h1<TitleProps>`
    font-size: ${({size}) => SIZE_TO_FONE_SIZE[size]};
    color: green;
`;

const App = () => {
    return (
        <>
            <Title size="Medium">TSX</Title>
            <div>Global Style이 적용되었습니다.</div>
        </>
    );
};

const root = ReactDOM.createRoot(NODE_MOUNT);
root.render(
    <>
        <GlobalStyles />
        <App />
    </>
);

