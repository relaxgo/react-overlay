import React from 'react';
import Footer from './Footer';

interface PageProps {
  children: React.ReactNode;
}

export default function MarkdownPage({ children }: PageProps) {
  return (
    <div className="page">
      <div className="markdown-body">{children}</div>
      <Footer />
      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .markdown-body {
          max-width: 900px;
          margin: auto;
        }
      `}</style>
    </div>
  );
}
