import React from 'react'

const GifGridItem = ( { id, title, url } ) => {



  return (
    <div className='card animate__animated animate__bounceInDown' >
      <img src={url} alt={ title }/>
      <p className='animate__animated animate__rotateInDownRight'>{title}</p>
    </div>
  )
}

export default GifGridItem

