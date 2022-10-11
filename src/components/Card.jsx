import React from 'react'
import CardContent from './CardContent'
import CardImage from './CardImage'
import CardPlan from './CardPlan'

function Card (props) {
  return (
    <li className='card'>
      <div className='card__container'>
        <CardPlan plan={props.plan} />
        <CardImage image={props.image} />
        <CardContent content={props.content} />
      </div>
    </li>
  )
}

export default Card
