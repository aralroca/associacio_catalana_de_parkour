import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../../components/layout'

export default function AboutUs() {
  const { t } = useTranslation()

  return (
    <Layout>
      <h1>{t`common:about-us`}</h1>
      <p>{t`about-us:description`}</p>

      <img
        className="training-img"
        loading="lazy"
        alt="training"
        src="/images/training.jpg"
      />

      <h2>{t`about-us:what-we-do-title`}</h2>
      <p>{t`about-us:what-we-do-description`}</p>

      <img
        className="training-img"
        loading="lazy"
        alt="training"
        src="/images/sylcatJam.jpg"
      />
      <h2>{t`about-us:futur-projects-title`}</h2>
      <p>{t`about-us:futur-projects-description`}</p>
    </Layout>
  )
}
