/* eslint-disable jsx-a11y/anchor-is-valid */
import './Nav.css'
import { BiHomeHeart } from 'react-icons/bi'
import { FaUserAstronaut } from 'react-icons/fa'
import { GoBook } from 'react-icons/go'
import { RiServiceLine } from 'react-icons/ri'
import { TbMessageDots } from 'react-icons/tb'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <BiHomeHeart />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FaUserAstronaut />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <GoBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <TbMessageDots />
      </a>
    </nav>
  )
}

export default Nav
