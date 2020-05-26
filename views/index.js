import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/layout'

export default function Home() {
  const { t, lang } = useTranslation()

  return (
    <Layout>
      <h1>{t`common:title`}</h1>

      <div className="home-menu">
        <Link href={`/${lang}/about-us`}>
          <a style={{ backgroundColor: '#1976d2' }}>{t`common:about-us`}</a>
        </Link>

        <Link href={`/${lang}/what-is-parkour`}>
          <a
            style={{ backgroundColor: '#009688' }}
          >{t`common:what-is-parkour`}</a>
        </Link>

        {/* <Link href={`/${lang}/participate`}>
          <a style={{ backgroundColor: '#ef6c00' }}>{t`common:participate`}</a>
        </Link> */}

        {/* <Link href={`/${lang}/multimedia`}>
          <a style={{ backgroundColor: '#795548' }}>{t`common:multimedia`}</a>
        </Link> */}

        <Link href={`/${lang}/contact`}>
          <a style={{ backgroundColor: '#673ab7' }}>{t`common:contact`}</a>
        </Link>
      </div>
    </Layout>
  )
}
