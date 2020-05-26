import React from 'react'
import Link from 'next-translate/Link'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

import i18nConf from '../i18n.json'

export default function Footer() {
  const { t, lang } = useTranslation()
  const { pathname } = useRouter()

  return (
    <footer>
      {t`common:change-lang`}
      {i18nConf.allLanguages
        .filter((l) => l !== lang)
        .map((l) => {
          const href = pathname.replace(`/${lang}`, '') || '/'

          return (
            <Link key={l} lang={l} href={href}>
              <a>{l.toUpperCase()}</a>
            </Link>
          )
        })}
    </footer>
  )
}
