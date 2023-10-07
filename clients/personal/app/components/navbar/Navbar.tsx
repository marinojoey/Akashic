import Link from 'next/link'
import React from 'react'
import { Koulen } from 'next/font/google'
import CustomLink from './navComponents/CustomLink'
import Hamburger from './navComponents/Hamburger'

const koulen = Koulen({ subsets: ['khmer'], style: 'normal', weight: '400' })

const NavBar = () => {
  return (
    <header className={`${koulen.className} bg-primary p-4 text-xl text-homeText`}>
      <div className="container mx-auto flex h-16 justify-between md:justify-center">
        <ul className="hidden items-stretch space-x-3 md:flex">
          <li className="flex">
            <CustomLink href="https://www.google.com">About</CustomLink>
          </li>
          <li className="flex">
            <CustomLink href="https://www.google.com" className="mr-8">
              Portfolio
            </CustomLink>
          </li>
        </ul>
        <Link
          rel="noopener noreferrer"
          href="https://www.google.com"
          className="-mb-1 ml-0 flex flex-shrink-0 items-center border-b-2 px-8 text-4xl dark:border-transparent"
        >
          Joey Marino
        </Link>
        <ul className="hidden items-stretch space-x-3 md:flex">
          <li className="flex">
            <CustomLink href="https://www.google.com" className="ml-8">
              Climbing
            </CustomLink>
          </li>
          <li className="flex">
            <CustomLink href="https://www.google.com" className="">
              Contact
            </CustomLink>
          </li>
        </ul>
        <div className="flex">
          <Hamburger className="md:hidden" />
        </div>
      </div>
    </header>
  )
}

export default NavBar
