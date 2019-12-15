import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export default function Header() {
  const { t, lang } = useTranslation()
  const { pathname } = useRouter()

  const menu = [
    {
      label: t`common:home`,
      href: `/${lang}`,
    },
    {
      label: t`common:about-us`,
      href: `/${lang}/about-us`,
    },
    {
      label: t`common:what-is-parkour`,
      href: `/${lang}/what-is-parkour`,
    },
    {
      label: t`common:participate`,
      href: `/${lang}/participate`,
    },
    {
      label: t`common:multimedia`,
      href: `/${lang}/multimedia`,
    },
    {
      label: t`common:contact`,
      href: `/${lang}/contact`,
    },
  ]

  return (
    <>
      <header>
        <nav className="menu">
          <ul>
            {menu.map(({ label, href, children }) => (
              <li className={pathname === href ? 'active' : ''} key={label}>
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <style jsx>
        {`
          header {
            background-color: #99294d;
            top: 0;
            left: 0;
            width: 100vw;
            position: fixed;
            box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.2);
          }
          .menu ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            padding: 0;
            margin: 0;
            list-style: none;
          }
          .menu a {
            display: block;
            padding: 1.5em;
            background-color: #99294d;
            transition-duration: 0.2s;
            text-decoration: none;
            color: #fafafa;
          }
          .menu a:hover,
          .menu li.active a {
            background-color: #ad4264;
          }
        `}
      </style>
    </>
  )
}
