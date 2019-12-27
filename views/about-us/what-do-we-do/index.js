import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../../../components/layout'

export default function WhatDoWeDo() {
  const { t } = useTranslation()

  return (
    <Layout>
      <h1>{t`common:what-do-we-do`}</h1>
    </Layout>
  )
}
