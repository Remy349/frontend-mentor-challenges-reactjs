import React from 'react'
import CardContent from './CardContent'
import CardImage from './CardImage'
import CardPlan from './CardPlan'

function Card () {
  return (
    <article className='card'>
      <div className='card__container'>
        <CardPlan />
        <CardImage />
        <CardContent />
      </div>
    </article>
  )
}

export default Card
