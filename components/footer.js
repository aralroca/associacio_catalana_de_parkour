import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

import i18nConf from '../i18n.json'

export default function Footer() {
  const { t, lang } = useTranslation()
  const { pathname } = useRouter()

  return (
    <>
      <footer>
        {t`common:change-lang`}
        {i18nConf.allLanguages
          .filter(l => l !== lang)
          .map(l => {
            const href =
              pathname === '/' ? `/${l}` : pathname.replace(`/${lang}`, `/${l}`)

            return (
              <Link key={l} href={href}>
                <a>{l.toUpperCase()}</a>
              </Link>
            )
          })}
      </footer>
      <style jsx>{`
      footer {
        width: calc(100vw - 30px);
        padding: 20px;
        background-color: #212121;
        margin 20px 0 -10px -10px;
        color: white;
        text-align: right;
      } 

      footer a {
        color: white;
        font-weight: bold;
        text-decoration: none;
        margin: 0 5px;
      }
    `}</style>
    </>
  )
}
