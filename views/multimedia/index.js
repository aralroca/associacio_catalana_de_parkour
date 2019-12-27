import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../../components/layout'

export default function Multimedia() {
  const { t } = useTranslation()

  return (
    <Layout>
      <h1>{t`common:multimedia`}</h1>
    </Layout>
  )
}
