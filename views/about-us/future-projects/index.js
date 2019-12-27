import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../../../components/layout'

export default function FutureProjects() {
  const { t } = useTranslation()

  return (
    <Layout>
      <h1>{t`common:future-projects`}</h1>
    </Layout>
  )
}
