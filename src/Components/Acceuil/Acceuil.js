import React from 'react'
import about from '../../assets/image/about.png'
import './Acceuil.css'


function Acceuil() {
  return (
    <>
     <div className='moi'>
        <h1>Je m'appelle</h1>
    </div>
    <div className='acceuil'>
      <div className='about'><img src={about} alt='about' /> </div>
    </div>
   
    </>
  )
}

export default Acceuil