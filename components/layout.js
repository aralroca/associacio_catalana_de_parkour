import React from 'react'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'

import Header from '../components/header'
import Footer from '../components/footer'

const main = {
  minHeight: '80vh',
  maxWidth: '920px',
  margin: '70px auto 0',
}

export default function Layout({ children }) {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t`common:title`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <motion.main
        style={main}
        initial="exit"
        animate="enter"
        exit="exit"
        variants={{ enter: { transition: { staggerChildren: 0.1 } } }}
      >
        {children}
      </motion.main>
      <Footer />
    </>
  )
}
