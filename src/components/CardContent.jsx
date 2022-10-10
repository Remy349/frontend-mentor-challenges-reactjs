import React from 'react'

function CardContent () {
  return (
    <div className='card__content'>
      <h3 className='card__content-title'>
        <a href='#' className='card__content-title_link'>
          Skilled e-learning landing page
        </a>
      </h3>
      <div className='card__content-info'>
        <div className='card__content-info_tools'>
          <ul className='card__content-info_tools_list'>
            <li className='card__content-info_tools_item'>HTML</li>
            <li className='card__content-info_tools_item'>CSS</li>
          </ul>
        </div>
        <div className='card__content-info_difficulty'>
          <span className='card__content-info_difficulty_container'>
            <span className='card__content-info_difficulty_number'>1</span>
            <span className='card__content-info_difficulty_level'>newbie</span>
          </span>
        </div>
      </div>
      <div className='card__content-desc'>
        <p className='card__content-desc_text'>
          This responsive page is perfect if you've learned the 
          fundamentals of HTML & CSS, completed a couple of smaller projects, 
          and want to take it up a notch.
        </p>
      </div>
    </div>
  )
}

export default CardContent
