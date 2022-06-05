import * as React from 'react';
import { createRoot } from 'react-dom/client';
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
