import '../styles/globals.css'
import '../styles/input.css'
import '../styles/layout.css'
import '../styles/markdown.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
