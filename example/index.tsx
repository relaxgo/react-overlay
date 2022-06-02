import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { OverlayProvider, ModalOverlay } from 'react-overlay';
import 'react-overlay/dist/react-overlay.css';

import Content from './Content';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <div>
    <OverlayProvider>
      <Content />
      <ModalOverlay />
    </OverlayProvider>
  </div>
);
