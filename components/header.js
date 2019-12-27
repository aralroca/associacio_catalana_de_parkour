import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export default function Header() {
  const { t, lang } = useTranslation()
  const { pathname } = useRouter()
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

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
        <img
          onClick={() => setOpenMobileMenu(b => !b)}
          className="mobile-menu"
          width={30}
          alt="menu"
          src="/images/menu.svg"
        />
        <nav className={`menu ${openMobileMenu ? 'open' : ''}`}>
          <ul>
            {menu.map(({ label, href }) => (
              <li className={pathname === href ? 'active' : ''} key={label}>
                <Link href={href}>
                  <a onClick={() => setOpenMobileMenu(false)}>{label}</a>
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
            z-index: 1;
            width: 100vw;
            height: 66px;
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

          .mobile-menu {
            display: none;
            position: absolute;
            right: 10px;
            top: 10px;
          }

          @media (max-width: 940px) {
            .menu ul {
              display: none;
              overflow: auto;
              margin-top: 66px;
              flex-direction: column;
            }

            .mobile-menu {
              display: block;
            }

            .menu.open ul {
              display: block;
            }

            .menu a {
              padding: 1.2em;
              background-color: #212121;
              border: 1px solid #312121;
            }

            .menu a:hover,
            .menu li.active a {
              background-color: #312121;
            }
          }
        `}
      </style>
    </>
  )
}
