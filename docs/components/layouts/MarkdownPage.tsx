import React from 'react';
import Footer from './Footer';

interface PageProps {
  children: React.ReactNode;
}

export default function Page({ children }: PageProps) {
  return (
    <div className="page">
      <div className="content">{children}</div>
      <Footer />
      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .content {
          max-width: 600px;
          margin: auto;
        }
      `}</style>
    </div>
  );
}
