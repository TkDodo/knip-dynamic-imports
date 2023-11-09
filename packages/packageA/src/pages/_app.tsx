import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {usedExport} from '../components'
import {usedExport2} from '../components/my-utils'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} foo={usedExport} bar={usedExport2} />
}
