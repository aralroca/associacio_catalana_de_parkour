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
    // {
    //   label: t`common:participate`,
    //   href: `/${lang}/participate`,
    // },
    // {
    //   label: t`common:multimedia`,
    //   href: `/${lang}/multimedia`,
    // },
    {
      label: t`common:contact`,
      href: `/${lang}/contact`,
    },
  ]

  return (
    <header>
      <img
        onClick={() => setOpenMobileMenu((b) => !b)}
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
  )
}
