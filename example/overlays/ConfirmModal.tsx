import * as React from 'react';
import { useModalOverlay, ModalProps } from '@react-overlay/overlays';

interface ConfirmModalProps extends ModalProps {
  description?: string;
  onConfirm: () => void;
}

export default function ConfirmModal({
  closeModal,
  description,
  onConfirm,
}: ConfirmModalProps) {
  const modalOverlay = useModalOverlay();
  const handleConfirm = () => {
    closeModal?.();
    onConfirm();
  };

  return (
    <div className="confirm-modal">
      <h4>Do you confirm?</h4>
      <p>{description}</p>
      <button onClick={closeModal}>cancel</button>
      <button onClick={handleConfirm}>confirm</button>
      <style jsx>{`
        .confirm-modal {
          position: relative;
          width: 300px;
          background: #fff;
          border-radius: 5px;
          padding: 10px;
        }
      `}</style>
    </div>
  );
}
