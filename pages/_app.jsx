import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quick Feels good | Umut K.</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Quick Feels good" />
        <meta name="keywords" content="Quick, Feels, good, umutk, UmutKDev, UmutK, umutk.js" />
        <meta name="author" content="Umut K." />
        <meta name="copyright" content="Umut K." />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Quick Feels good" />
        <meta property="og:description" content="Get Quick Feels good right now buddy" />
        <meta property="og:image" content="/img/favicon-32x32.png" />
        <meta property="og:url" content="https://umutk.codes" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@UmutKDev" />
        <meta name="twitter:creator" content="@UmutKDev" />
        <meta name="twitter:title" content="Quick Feels good" />
        <meta name="twitter:description" content="Get Quick Feels good right now buddy" />
        <meta name="twitter:image" content="/img/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
