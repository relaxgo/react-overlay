import { useModalOverlay } from '@react-overlay/overlays';

import NestedModal from '$/components/modals/NestedModal';

export default function OpenNestedModal() {
  const modalOverlay = useModalOverlay();

  const handleOpenModal = () => {
    const modal = <NestedModal />;
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
