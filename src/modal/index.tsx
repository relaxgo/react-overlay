import React, {
  isValidElement,
  cloneElement,
  useEffect,
  useState,
} from 'react';

import { useOverlayStore, useOverlay, OverlayCtrl } from '../provider';
import { useDocumentEventListener } from '../utils';
import './style.css';

let __modalId = 1;
const createModalId = () => __modalId++;
export const OVERLAY_MODAL = 'modal';

export interface ModalOption {
  disableEscapeKeyClose?: boolean;
  disableBackdropClose?: boolean;
  disableClose?: boolean;
  disableBackdrop?: boolean;
}

type ModalData = {
  id: number;
  content: React.ReactElement<ModalProps>;
  option: ModalOption;
};

export interface ModalProps {
  closeModal?: () => void;
}

export function useModalOverlay() {
  return useOverlay(OVERLAY_MODAL) as OverlayCtrl<
    React.ReactElement<ModalProps>,
    ModalOption
  >;
}

export default function ModalOverlay() {
  const [mounted, setMounted] = useState(false);
  let [modals, setModal] = useState<ModalData[]>([]);
  const { addOverlay, removeOverlay } = useOverlayStore();

  useEffect(() => {
    document.body.classList.toggle('RoModal--open', modals.length > 0);
  }, [modals]);

  const closeModalById = (id: number) => {
    setModal(modals => modals.filter(m => m.id !== id));
  };

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    const closeAll = () => setModal([]);

    const openModal = (
      content: React.ReactElement<ModalProps>,
      option?: ModalOption
    ) => {
      if (!isValidElement(content)) {
        throw new Error('it not valid modal');
      }

      const id = createModalId();
      const closeModal = () => closeModalById(id);
      const modalData = {
        id,
        content: cloneElement(content, { closeModal }),
        option: option || {},
      };

      setModal(modals => [...modals, modalData]);
      return closeModal;
    };

    addOverlay(OVERLAY_MODAL, { open: openModal, closeAll });
    return () => removeOverlay(OVERLAY_MODAL);
  }, [addOverlay, removeOverlay]);

  const handleBackdrop = () => {
    const topModal = modals[modals.length - 1];
    if (!topModal) return;

    const { disableBackdropClose, disableClose } = topModal.option;
    if (!disableClose || !disableBackdropClose) {
      closeModalById(topModal.id);
    }
  };

  useDocumentEventListener('keyup', (evt: KeyboardEvent) => {
    const { key, keyCode } = evt;
    const isEcs = key === 'Escape' || keyCode === 27;
    if (!isEcs) return;

    const topModal = modals[modals.length - 1];
    if (!topModal) return;

    const { disableClose, disableEscapeKeyClose } = topModal.option;
    if (!disableClose && !disableEscapeKeyClose) {
      closeModalById(topModal.id);
    }
  });

  if (!mounted) return null;

  const emptyClass = modals.length === 0 ? 'RoModal-container--empty' : '';

  return (
    <div className={`RoModal-container ${emptyClass}`}>
      {modals.map((modal, i) => (
        <ModalItem
          key={modal.id}
          modal={modal}
          handleBackdrop={handleBackdrop}
          active={i === modals.length - 1}
        />
      ))}
    </div>
  );
}

type ModalItemProps = {
  modal: ModalData;
  active: boolean;
  handleBackdrop: React.MouseEventHandler;
};

function ModalItem({ modal, active, handleBackdrop }: ModalItemProps) {
  return (
    <div className={`RoModal__item ${active ? 'RoModal--active' : ''}`}>
      {modal.option.disableBackdrop ? null : (
        <div className="RoModal__backdrop" onClick={handleBackdrop} />
      )}
      {modal.content}
    </div>
  );
}
