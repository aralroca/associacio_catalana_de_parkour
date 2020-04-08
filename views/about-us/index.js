import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'
import Layout from '../../components/layout'
import animation from '../../utils/animation'

export default function AboutUs() {
  const { t } = useTranslation()

  return (
    <Layout>
      <motion.h1 variants={animation}>{t`common:about-us`}</motion.h1>
      <motion.p variants={animation}>{t`about-us:description`}</motion.p>

      <motion.img
        variants={animation}
        className="training-img"
        loading="lazy"
        alt="training"
        src="/images/training.jpg"
      />

      <motion.h2 variants={animation}>{t`about-us:what-we-do-title`}</motion.h2>
      <motion.p
        variants={animation}
      >{t`about-us:what-we-do-description`}</motion.p>

      <motion.img
        variants={animation}
        className="training-img"
        loading="lazy"
        alt="training"
        src="/images/sylcatJam.jpg"
      />
      <motion.h2
        variants={animation}
      >{t`about-us:futur-projects-title`}</motion.h2>
      <motion.p
        variants={animation}
      >{t`about-us:futur-projects-description`}</motion.p>
    </Layout>
  )
}
