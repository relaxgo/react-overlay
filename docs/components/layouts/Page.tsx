import React from 'react';
import Footer from './Footer';
import styled from '@emotion/styled';

interface PageProps {
  children: React.ReactNode;
}

export default function Page({ children }: PageProps) {
  return (
    <PageRoot>
      {children}
      <Footer />
    </PageRoot>
  );
}

const PageRoot = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
