import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useModalOverlay } from 'react-overlay';

import InfoModal from './overlays/InfoModal';

export default function Content() {
  const modalOverlay = useModalOverlay();

  const handleShowModal = () => {
    const num = Math.round(Math.random() * 2000 + 2000);
    const modal = <InfoModal num={num} />;
    modalOverlay.show(modal);
  };

  return (
    <div>
      <h1 className="title">test</h1>
      <button onClick={handleShowModal}>open a modal </button>
      <style jsx>{`
        .title {
          margin: 10px;
        }
      `}</style>
    </div>
  );
}
