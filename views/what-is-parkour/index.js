import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import Layout from '../../components/layout'

export default function WhatIsParkour() {
  const { t } = useTranslation()

  return (
    <Layout>
      <h1>{t`what-is-parkour:title`}</h1>
      <Trans
        i18nKey="what-is-parkour:description"
        components={[<p />, <p />, <p />]}
      />
      <div className="iframe-box">
        <iframe
          src="https://www.youtube.com/embed/dER8wAoUGVk"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <h2>{t`what-is-parkour:parkour-vs-freerunning-title`}</h2>
      <Trans
        i18nKey="what-is-parkour:parkour-vs-freerunning-description"
        components={[<p />, <p />, <p />]}
      />
    </Layout>
  )
}
