import React from 'react'
import './footer.css'
import Image from 'next/image'
import 'font-awesome/css/font-awesome.min.css'
import BlackMpIcon from '../../assets/icons/MP_icon_black.png'
import GreenMpIcon from '../../assets/icons/MP_icon_green.png'

const icons = [
  {
    href: 'https://www.mountainproject.com/user/200180927/joey-marino',
    type: 'image',
    src: BlackMpIcon,
    alt: 'MP Icon',
    key: 'mp-icon',
  },
  {
    href: 'https://github.com/marinojoey',
    type: 'icon',
    iconClass: 'fa fa-github',
    key: 'github',
  },
  {
    href: 'https://www.linkedin.com/in/joeymarino1994/',
    type: 'icon',
    iconClass: 'fa fa-linkedin',
    key: 'linkedin',
  },
  {
    href: 'mailto:marinojoey@pm.me',
    type: 'icon',
    iconClass: 'fa fa-envelope',
    key: 'email',
  },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-footerColor p-4 text-black">
      <div className="container mx-auto flex h-8 items-center justify-between space-x-3 md:justify-center">
        <span className="mr-44 hidden text-sm md:flex">© {currentYear} Joey Marino</span>
        <div className="flex flex-col justify-center pt-0 md:pl-44">
          <div className="flex justify-center space-x-1">
            {icons.map(({ href, type, iconClass, src, alt, key }) => (
              <a key={key} href={href} className="flex h-8 w-8 items-center justify-center">
                {type === 'icon' ? (
                  <i className={`${iconClass} icon`} style={{ fontSize: '24px' }} />
                ) : (
                  <div className="icon" style={{ marginRight: '7px' }}>
                    {src && (
                      <span className="flex justify-center">
                        <Image className="MpBlack ml-2" src={BlackMpIcon} alt={alt} width={24} height={24} />
                        <Image className="MpGreen ml-2" src={GreenMpIcon} alt={alt} width={24} height={24} />
                      </span>
                    )}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
