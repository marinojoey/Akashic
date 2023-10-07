'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import ascii from '../../ascii'

interface LinkProps {
  className?: string
}

const Hamburger = ({ className }: LinkProps) => {
  ascii()
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const menuRef = useRef<HTMLDivElement>(null)
  const baseClass = `flex items-center px-4 my-4 border-b-2 dark:border-transparent
    rounded pb-2 pt-2.5 font-medium uppercase transition
    duration-150 ease-in-out hover:text-primary focus:text-primary-600
    focus:outline-none focus:ring-0 active:text-primary-700`

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <button title="Button" type="button" className="flex p-4 md:hidden" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-homeText hover:text-black"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {isOpen && (
        <div className="relative" ref={menuRef}>
          <div
            className="z-2 w-30 absolute end-0 mr-4 mt-12 divide-y
              rounded-md border border-gray-900 bg-gray-900 shadow-lg"
            role="menu"
          >
            <Link
              rel="noopener noreferrer"
              href="https::/www.google.com"
              className={`${baseClass} ${className} -mb-2 mt-0 flex justify-end`}
            >
              About
            </Link>
            <Link
              rel="noopener noreferrer"
              href="https::/www.google.com"
              className={`${baseClass} ${className} -mb-2 -mt-3 flex justify-end`}
            >
              Portfolio
            </Link>
            <Link
              rel="noopener noreferrer"
              href="https::/www.google.com"
              className={`${baseClass} ${className} -my-2 flex justify-end`}
            >
              Climbing
            </Link>
            <Link
              rel="noopener noreferrer"
              href="https::/www.google.com"
              className={`${baseClass} ${className} mb-0 mt-0 flex justify-end`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Hamburger
