import React from 'react'

function Card () {
  return (
    <article className='card'>
      <div className='card__container'>
        <div className='card__plan'>
          <div className='card__plan-container'>
            <span className='card__plan-type'></span>
          </div>
        </div>
        <div className='card__image'>
          <a href='#' className='card__image-link'>
            <img
              className='card__image-img'
              src=''
              alt=''
            />
          </a>
        </div>
        <div className='card__content'>
          <h3 className='card__content-title'>
            <a href='#' className='card__content-title_link'></a>
          </h3>
          <div className='card__content-info'>
            <div className='card__content-info_tools'>
              <ul className='card__content-info_tools_list'>
                <li className="card__content-info_tools_item"></li>
                <li className="card__content-info_tools_item"></li>
                <li className="card__content-info_tools_item"></li>
              </ul>
            </div>
            <div className='card__content-info_difficulty'>
              <span className='card__content-info_difficulty_container'>
                <span className='card__content-info_difficulty_number'></span>
                <span className='card__content-info_difficulty_level'></span>
              </span>
            </div>
          </div>
          <div className='card__content-desc'>
            <p className='card__content-desc_text'></p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Card
