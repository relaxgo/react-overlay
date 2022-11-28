import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="link-list">
        <a
          className="link-item"
          href="https://github.com/relaxgo/react-overlay"
        >
          GitHub
        </a>
        <Link href="/docs">
          <span className="link-item">Docs</span>
        </Link>
      </div>
      <div className="copyright">
        <span>© {new Date().getFullYear()} react-overlay</span>
        {' · '}
        <span>
          <span>Built by </span>
          <a className="link-item" href="https://github.com/relaxgo">
            relaxgo
          </a>
        </span>
      </div>
      <style jsx>{`
        .footer {
          display: flex;
          direction: row;
          flex-direction: column;
          align-items: center;
          margin-top: auto;
          margin-bottom: 5px;
        }

        .link-item {
          margin: 4px;
          text-decoration-line: underline;
        }
      `}</style>
    </footer>
  );
}
