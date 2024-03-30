# react-overlay

[![Size](https://img.shields.io/bundlephobia/minzip/@react-overlay/overlays)](https://www.npmjs.com/package/@react-overlay/overlays)
[![Downloads](https://img.shields.io/npm/dw/@react-overlay/overlays)](https://www.npmjs.com/package/@react-overlay/overlays)
[![Version](https://img.shields.io/npm/v/@react-overlay/overlays)](https://www.npmjs.com/package/@react-overlay/overlays)
[![NPM License](https://img.shields.io/npm/l/@react-overlay/overlays)](https://www.npmjs.com/package/@react-overlay/overlays)

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

Then it's easy to open your modal or other components by a hook. the modal will be mounted on the root.
```tsx
import { useModalOverlay } from '@react-overlay/overlays';
import InfoModal from './overlays/InfoModal';

export default function Content() {
  const modalOverlay = useModalOverlay();

  const handleOpenModal = () => {
    const modal = <InfoModal />;
    modalOverlay.open(modal);
  };

  return (
    <div>
      <h1 className="title">test</h1>
      <button onClick={handleOpenModal}>open a modal </button>
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
