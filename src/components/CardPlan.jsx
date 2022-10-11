import React from 'react'

function CardPlan (props) {
  return (
    <div className='card__plan'>
      <div className='card__plan-container'>
        <span className='card__plan-type'>
          {props.plan.type}
        </span>
      </div>
    </div>
  )
}

export default CardPlan
