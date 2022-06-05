# react-overlay

[![NPM](https://img.shields.io/npm/v/@react-overlay/overlays.svg)](https://www.npmjs.com/package/@react-overlay/overlays)

## Install

```bash
npm install --save @react-overlay/overlays
```

## Usage

Add OverlayProvider on the root, and mount all your overlay container
```tsx
import React, { Component } from 'react'

import { OverlayProvider, ModalOverlay } from '@react-overlay/overlays';
import '@react-overlay/overlays/style.css';
import Content from './Content';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <>
    <OverlayProvider>
      <Content />
      <ModalOverlay />
    </OverlayProvider>
  </>
);
```

Then it's easy to show your modal or other components by a hook. the modal will be mounted on the root.
```tsx
import { useModalOverlay } from '@react-overlay/overlays';
import InfoModal from './overlays/InfoModal';

export default function Content() {
  const modalOverlay = useModalOverlay();

  const handleShowModal = () => {
    const modal = <InfoModal />;
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
```

## License

MIT © [relaxgo](https://github.com/relaxgo)
