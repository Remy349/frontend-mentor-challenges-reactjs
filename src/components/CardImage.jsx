import React from 'react'
import newbieImg from '../img/newbie-img.jpg'

function CardImage () {
  return (
    <div className='card__image'>
      <a href='#' className='card__image-link'>
        <img
          className='card__image-img'
          src={newbieImg}
          alt='Newbiew Challenge Image'
        />
      </a>
    </div>
  )
}

export default CardImage
