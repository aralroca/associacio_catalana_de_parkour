import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/layout'
import animation from '../utils/animation'

export default function Home() {
  const { t, lang } = useTranslation()

  return (
    <Layout>
      <motion.h1 variants={animation}>{t`common:title`}</motion.h1>

      <div className="home-menu">
        <Link href={`/${lang}/about-us`}>
          <motion.a
            variants={animation}
            style={{ backgroundColor: '#1976d2' }}
          >{t`common:about-us`}</motion.a>
        </Link>

        <Link href={`/${lang}/what-is-parkour`}>
          <motion.a
            variants={animation}
            style={{ backgroundColor: '#009688' }}
          >{t`common:what-is-parkour`}</motion.a>
        </Link>

        {/* <Link href={`/${lang}/participate`}>
          <a style={{ backgroundColor: '#ef6c00' }}>{t`common:participate`}</a>
        </Link> */}

        {/* <Link href={`/${lang}/multimedia`}>
          <a style={{ backgroundColor: '#795548' }}>{t`common:multimedia`}</a>
        </Link> */}

        <Link href={`/${lang}/contact`}>
          <motion.a
            variants={animation}
            style={{ backgroundColor: '#673ab7' }}
          >{t`common:contact`}</motion.a>
        </Link>
      </div>
    </Layout>
  )
}
