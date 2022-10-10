import React from 'react'
import { HiInformationCircle } from 'react-icons/hi'
import AppTags from './components/AppTags'
import Card from './components/Card'

function App () {
  return (
    <div className='principal'>
      <div className='principal__container container'>
        <div className='principal__info'>
          <ul className='principal__info-tags'>
            <AppTags />
            <AppTags />
            <AppTags />
            <AppTags />
            <AppTags />
          </ul>
          <button type='button' className='principal__info-btn'>
            <div className='principal__info-btn_container'>
              <span className='principal__info-btn_text'>
                Learn about our challenge types
              </span>
              <HiInformationCircle className='principal__info-icon' />
            </div>
          </button>
        </div>
        <div className='principal__cards'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
