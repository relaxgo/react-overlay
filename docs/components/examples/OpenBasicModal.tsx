import { useModalOverlay } from '@react-overlay/overlays';

import ConfirmModal from '$/components/modals/ConfirmModal';

export default function OpenBasicModal() {
  const modalOverlay = useModalOverlay();

  const handleOpenModal = () => {
    const modal = <ConfirmModal description="This is a message for confirm" />;
    modalOverlay.open(modal);
  };

  return (
    <div>
      <button className="btn" onClick={handleOpenModal}>
        Open a Modal
      </button>
    </div>
  );
}
