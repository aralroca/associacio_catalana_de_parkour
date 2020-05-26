import React from 'react'
import Layout from '../../components/layout'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <Layout>
      <h1>{t`contact:title`}</h1>
      <div className="contact-box">
        <img alt="contact" src="/images/contact.svg" />
        <Trans
          i18nKey="contact:description"
          components={[<p />, <strong />, <a href="mailto:consell@acpk.cat" />]}
        />
      </div>
    </Layout>
  )
}
