import { AnimatePresence } from 'framer-motion'

import '../styles/main.scss'

export default function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  )
}
