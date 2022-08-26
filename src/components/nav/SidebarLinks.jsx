import { useState } from 'react'
import { GiSpellBook } from 'react-icons/gi'
import { BsPaperclip } from 'react-icons/bs'
import { TiHome } from 'react-icons/ti'
import { ImQuill } from 'react-icons/im'
import { FaMapPin } from 'react-icons/fa'
import { BsFillDropletFill } from 'react-icons/bs'
import { GiFairyWand } from 'react-icons/gi'
import './SidebarLinks.css'

export default function SidebarLinks() {
  const [showThemes, setShowThemes] = useState(false)

  // const showThemesModal = () => {
  //   setShowThemes(true)
  // }

  return (
    <div className="side-links">
      <div className="icon-cont">
        <TiHome 
          className="icons"
          onClick={() => setShowThemes(true)}
        />
        <ImQuill className="icons smaller"/>
        {/* <BsPaperclip className="icons"/> */}
        <FaMapPin className="icons" />
        <GiSpellBook className="icons"/>
      </div>
      <hr/>
      <div className="icon-themes">
        <GiFairyWand className="icons smaller" />
        <BsFillDropletFill className="icons smaller violet" />
        <BsFillDropletFill className="icons smaller matcha" />
        <BsFillDropletFill className="icons smaller fluff" />
      </div>
    </div>
  )
}
