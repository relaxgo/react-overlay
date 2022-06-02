import * as React from 'react';
import { ModalProps } from 'react-overlay';

interface LoadingModalProps extends ModalProps {
  message?: string;
}

export default function LoadingModal({ message }: LoadingModalProps) {
  return (
    <div className="loading-modal">
      <div className="loading-modal__bg">{message}</div>
      <div className="loading-modal__content">{message}</div>
      <style jsx>{`
        .loading-modal {
          position: relative;
        }

        .loading-modal__bg {
          position: absolute;
          background: #000;
          border-radius: 10px;
          opacity: 0.8;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
        }

        .loading-modal__content {
          padding: 35px 10px;
          color: #fff;
          width: 150px;
          position: relative;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
