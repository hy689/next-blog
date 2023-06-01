import '@/styles/globals.css'
import { Html } from 'next/document'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}
