import React from 'react'

function CardImage (props) {
  return (
    <div className='card__image'>
      <a href='#' className='card__image-link'>
        <img
          className='card__image-img'
          src={props.image.url}
          alt={props.image.alt}
        />
      </a>
    </div>
  )
}

export default CardImage
