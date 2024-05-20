import '$/styles/globals.css';
import '$/styles/input.css';
import '$/styles/layout.css';
import '$/styles/markdown.css';
import '@react-overlay/overlays/style.css';

import { AppProps } from 'next/app';
import { OverlayProvider, ModalOverlay } from '@react-overlay/overlays';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OverlayProvider>
      <Component {...pageProps} />
      <ModalOverlay />
    </OverlayProvider>
  );
}
