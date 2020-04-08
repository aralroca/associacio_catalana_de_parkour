import React from 'react'
import { motion } from 'framer-motion'
import Layout from '../../components/layout'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import animation from '../../utils/animation'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <Layout>
      <motion.h1 variants={animation}>{t`contact:title`}</motion.h1>
      <motion.div variants={animation} className="contact-box">
        <img alt="contact" src="/images/contact.svg" />
        <Trans
          i18nKey="contact:description"
          components={[<p />, <strong />, <a href="mailto:consell@acpk.cat" />]}
        />
      </motion.div>
    </Layout>
  )
}
