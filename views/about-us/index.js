import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../../components/layout'

export default function AboutUs() {
  const { t } = useTranslation()

  return (
    <Layout>
      <h1>{t`common:about-us`}</h1>
    </Layout>
  )
}
