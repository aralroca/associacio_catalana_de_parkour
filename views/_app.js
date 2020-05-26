import '../styles/main.scss'

export default function MyApp({ Component, pageProps, router }) {
  return <Component {...pageProps} key={router.asPath} />
}
