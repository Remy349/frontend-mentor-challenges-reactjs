import React from 'react'

function CardContent (props) {
  const difficultyLevel = () => {
    let element

    if (props.content.info.difficulty.number === '1') {
      element = (
        <span className='card__content-info_difficulty_container one'>
          <span className='card__content-info_difficulty_one'>
            {props.content.info.difficulty.number}
          </span>
          <span className='card__content-info_difficulty_newbie'>
            {props.content.info.difficulty.level}
          </span>
        </span>
      )
    }

    if (props.content.info.difficulty.number === '2') {
      element = (
        <span className='card__content-info_difficulty_container two'>
          <span className='card__content-info_difficulty_two'>
            {props.content.info.difficulty.number}
          </span>
          <span className='card__content-info_difficulty_junior'>
            {props.content.info.difficulty.level}
          </span>
        </span>
      )
    }

    if (props.content.info.difficulty.number === '3') {
      element = (
        <span className='card__content-info_difficulty_container three'>
          <span className='card__content-info_difficulty_three'>
            {props.content.info.difficulty.number}
          </span>
          <span className='card__content-info_difficulty_intermediate'>
            {props.content.info.difficulty.level}
          </span>
        </span>
      )
    }

    if (props.content.info.difficulty.number === '4') {
      element = (
        <span className='card__content-info_difficulty_container four'>
          <span className='card__content-info_difficulty_four'>
            {props.content.info.difficulty.number}
          </span>
          <span className='card__content-info_difficulty_advanced'>
            {props.content.info.difficulty.level}
          </span>
        </span>
      )
    }

    if (props.content.info.difficulty.number === '5') {
      element = (
        <span className='card__content-info_difficulty_container five'>
          <span className='card__content-info_difficulty_five'>
            {props.content.info.difficulty.number}
          </span>
          <span className='card__content-info_difficulty_guru'>
            {props.content.info.difficulty.level}
          </span>
        </span>
      )
    }

    return element
  }

  const toolsList = () => {
    let element

    if (props.content.info.tools.hasOwnProperty('html') &&
      props.content.info.tools.hasOwnProperty('css')) {
      element = (
        <ul className='card__content-info_tools_list'>
          <li className='card__content-info_tools_item'>
            {props.content.info.tools.html}
          </li>
          <li className='card__content-info_tools_item'>
            {props.content.info.tools.css}
          </li>
        </ul>
      )
    }

    if (props.content.info.tools.hasOwnProperty('js')) {
      element = (
        <ul className='card__content-info_tools_list'>
          <li className='card__content-info_tools_item'>
            {props.content.info.tools.html}
          </li>
          <li className='card__content-info_tools_item'>
            {props.content.info.tools.css}
          </li>
          <li className='card__content-info_tools_item'>
            {props.content.info.tools.js}
          </li>
        </ul>
      )
    }

    if (props.content.info.tools.hasOwnProperty('api')) {
      element = (
        <ul className='card__content-info_tools_list'>
          <li className='card__content-info_tools_item'>
            {props.content.info.tools.html}
          </li>
          <li className='card__content-info_tools_item'>
            {props.content.info.tools.css}
          </li>
          <li className='card__content-info_tools_item'>
            {props.content.info.tools.js}
          </li>
          <li className='card__content-info_tools_item'>
            {props.content.info.tools.api}
          </li>
        </ul>
      )
    }

    return element
  }

  return (
    <div className='card__content'>
      <h3 className='card__content-title'>
        <a href='#' className='card__content-title_link'>
          {props.content.title}
        </a>
      </h3>
      <div className='card__content-info'>
        <div className='card__content-info_tools'>
          {toolsList()}
        </div>
        <div className='card__content-info_difficulty'>
          {difficultyLevel()}
        </div>
      </div>
      <div className='card__content-desc'>
        <p className='card__content-desc_text'>
          {props.content.desc}
        </p>
      </div>
    </div>
  )
}

export default CardContent
