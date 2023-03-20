import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <header>
      <h1 className='title'>MemoTest</h1>
      <nav className='navbar'>
          <Link to="/facil">Facil</Link>
          <Link to="/dificil">Dificil</Link>
      </nav>
    </header>
  )
}

export default Navbar