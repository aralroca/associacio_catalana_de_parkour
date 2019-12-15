import React from 'react'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout({ children }) {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t`common:title`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <style jsx global>
        {`
          * {
            padding: 0;
            margin: 0;
          }
        `}
      </style>
      <style jsx>
        {`
          main {
            min-height: 80vh;
            margin-top: 70px;
          }
        `}
      </style>
      <Footer />
    </>
  )
}
