import React from 'react'

const NavMenu = ({navOpen, setNavOpen}) => {
    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Services',
          link: '#services',
          className: 'nav-link'
        },
        {
          label: 'Products',
          link: '#products',
          className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];

  return (
    <div className='md:hidden  flex flex-col'>
        {navOpen ? navItems.map((item, key)=>(
            <div key={key} className='mt-5'>
                <a href={item.link} className='text-sm font-normal' onClick={()=>setNavOpen(!navOpen)}>{item.label}</a>
            </div>
        )) : null}
    </div>
  )
}

export default NavMenu