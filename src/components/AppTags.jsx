import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'

function AppTags () {
  return (
    <li className='principal__info-tags_item'>
      <span className='principal__info-tags_text'>Newbie</span>
      <button type='button' className='principal__info-tags_btn'>
        <IoCloseOutline className='principal__info-tags_btn_close' />
      </button>
    </li>
  )
}

export default AppTags
