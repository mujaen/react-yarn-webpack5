import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from "styled-components";
const NODE_MOUNT = document.getElementById('app');
const Title = styled.h1`
    font-size: 20px;
    color: green;
`;

const App = () => {
    return (
        <Title>TSX</Title>
    );
};

const root = ReactDOM.createRoot(NODE_MOUNT);
root.render(<App />);

