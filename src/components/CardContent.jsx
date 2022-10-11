import React from 'react'

function CardContent (props) {
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
          <span className='card__content-info_difficulty_container'>
            <span className='card__content-info_difficulty_number'>1</span>
            <span className='card__content-info_difficulty_level'>newbie</span>
          </span>
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
