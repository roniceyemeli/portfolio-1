import React from 'react'
import about from '../../assets/image/about.svg'
import './Acceuil.css'


function Acceuil() {
  return (
    <>
    <div className='acceuil'>
      <div className='about'><img src={about} alt='about' /> </div>
    </div>
    </>
  )
}

export default Acceuil