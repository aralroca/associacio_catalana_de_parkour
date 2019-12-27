import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../../components/layout'

export default function Participate() {
  const { t } = useTranslation()

  return (
    <Layout>
      <h1>{t`common:participate`}</h1>
    </Layout>
  )
}
