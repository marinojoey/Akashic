import Link from 'next/link'
import React from 'react'

interface LinkProps {
  href: string
  className?: string
  children: React.ReactNode
}

const CustomLink = ({ href, className, children }: LinkProps) => {
  const baseClass = `flex items-center px-4 my-4 border-b-2 dark:border-transparent
    rounded pb-2 pt-2.5 font-medium uppercase transition
    duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary focus:text-primary-600
    focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-homeText`
  return (
    <Link rel="noopener noreferrer" href={href} className={`${baseClass} ${className}`}>
      {children}
    </Link>
  )
}

export default CustomLink
