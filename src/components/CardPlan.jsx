import React from 'react'

function CardPlan (props) {
  return (
    <div className='card__plan'>
      <div className='card__plan-container'>
        <span
          className={
            (props.plan.type === 'Premium')
              ? 'card__plan-premium'
              : 'card__plan-free'
          }
        >
          {props.plan.type}
        </span>
      </div>
    </div>
  )
}

export default CardPlan
