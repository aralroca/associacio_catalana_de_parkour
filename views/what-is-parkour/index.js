import React from 'react'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import Layout from '../../components/layout'
import animation from '../../utils/animation'

export default function WhatIsParkour() {
  const { t } = useTranslation()

  return (
    <Layout>
      <motion.h1 variants={animation}>{t`what-is-parkour:title`}</motion.h1>
      <Trans
        i18nKey="what-is-parkour:description"
        components={[
          <motion.p variants={animation} />,
          <motion.p variants={animation} />,
          <motion.p variants={animation} />,
        ]}
      />
      <motion.div variants={animation} className="iframe-box">
        <iframe
          src="https://www.youtube.com/embed/dER8wAoUGVk"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>
      <h2>{t`what-is-parkour:parkour-vs-freerunning-title`}</h2>
      <Trans
        i18nKey="what-is-parkour:parkour-vs-freerunning-description"
        components={[<p />, <p />, <p />]}
      />
    </Layout>
  )
}
