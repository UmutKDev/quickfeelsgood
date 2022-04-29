import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='dark:bg-neutral-900 bg-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}