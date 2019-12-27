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
      <style jsx>
        {`
          .contact-box {
            max-width: 500px;
            margin: 20px auto;
            display: flex;
            align-content: center;
            justify-content: space-between;
            box-shadow: 2px 2px 10px 0 hsla(0, 0%, 40%, 0.5);
            background-color: #fff;
            border-radius: 2px;
            border: 1px solid #a6a7a9;
            padding: 10px;
            min-height: 100px;
          }

          .contact-box img {
            width: 80px;
          }
        `}
      </style>
    </Layout>
  )
}
