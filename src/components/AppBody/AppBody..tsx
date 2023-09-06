import React from 'react';
import { Container, Grid, Paper } from '@mantine/core';

type AppBodyProps = {
    children: React.ReactNode;
};

const AppBody: React.FC<AppBodyProps> = ({ children }) => (
    <Container
      size="lg"
      style={{
            marginTop: '1rem',
            marginBottom: '2rem',
        }}
    >
        {children}

    </Container>
);

export default AppBody;
