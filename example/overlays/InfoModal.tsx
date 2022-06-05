import * as React from 'react';
import { useModalOverlay, ModalProps } from '@react-overlay/overlays';

import ConfirmModal from './ConfirmModal';
import LoadingModal from './LoadingModal';

interface InfoModalProps extends ModalProps {
  num?: number;
}

export default function InfoModal({ closeModal, num }: InfoModalProps) {
  const modalOverlay = useModalOverlay();

  const handleConfirm = () => {
    const modal = <LoadingModal message="loading" />;
    const closeLoading = modalOverlay.show(modal, { closable: false });
    setTimeout(() => {
      closeLoading();
      closeModal?.();
    }, num);
  };

  const handleShowConfirm = () => {
    const modal = (
      <ConfirmModal
        onConfirm={handleConfirm}
        description={`The load will take ${num}ms.`}
      />
    );
    modalOverlay.show(modal);
  };

  return (
    <div className="info-modal">
      <h4>Info</h4>
      <p>
        You got a random number {num}. Do you want to continue opening a loading
        modal
      </p>
      <button onClick={closeModal}>cancel</button>
      <button onClick={handleShowConfirm}>confirm</button>
      <style jsx>{`
        .info-modal {
          position: relative;
          width: 300px;
          background: #fff;
          border-radius: 5px;
          padding: 10px;
        }

        .info-modal ~ .modal__backdrop {
          background: red;
        }
      `}</style>
    </div>
  );
}
