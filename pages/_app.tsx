import '../styles/main.scss'
import type { AppProps } from 'next/app'

import {Footer, Layout} from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    
      <Component {...pageProps} />
    <Footer />
  </Layout>
  )
}
