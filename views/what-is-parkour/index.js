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
      <style jsx>
        {`
          iframe {
            width: 70%;
            height: 100%;
            top: 0;
            position: absolute;
            margin-left: 15%;
          }
          .iframe-box {
            position: relative;
            z-index: 0;
            width: 100%;
            padding-top: 46%;
            margin: 20px;
          }
        `}
      </style>
    </Layout>
  )
}
