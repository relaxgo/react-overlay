import * as React from 'react';
import { useModalOverlay, ModalProps } from '@react-overlay/overlays';

interface ConfirmModalProps extends ModalProps {
  title?: string;
  description: string;
  onConfirm?: () => void;
}

export default function ConfirmModal({
  closeModal,
  title,
  description,
  onConfirm,
}: ConfirmModalProps) {
  const modalOverlay = useModalOverlay();
  const handleConfirm = () => {
    closeModal?.();
    onConfirm?.();
  };

  return (
    <div className="modal confirm-modal">
      {title ? <h4 className="modal__title">{title}</h4> : null}
      <p>{description}</p>
      <div className="modal__footer">
        <button className="btn" onClick={closeModal}>
          cancel
        </button>
        <button className="btn" onClick={handleConfirm}>
          confirm
        </button>
      </div>
      <style jsx>{`
        .confirm-modal {
          position: relative;
          width: 300px;
          background: #fff;
          border-radius: 5px;
          padding: 20px;
        }

        .modal__title {
          margin: 5px auto;
        }

        .modal__footer {
          display: flex;
        }
      `}</style>
    </div>
  );
}
