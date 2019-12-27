import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/layout'

export default function Home() {
  const { t } = useTranslation()

  return (
    <Layout>
      <h1>{t`common:home`}</h1>
    </Layout>
  )
}
