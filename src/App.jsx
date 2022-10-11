import React from 'react'
import { HiInformationCircle } from 'react-icons/hi'
import AppTags from './components/AppTags'
import Card from './components/Card'
import { cardData } from './data.js'

function App () {
  return (
    <div className='principal'>
      <div className='principal__container container'>
        <div className='principal__info'>
          <ul className='principal__info-tags'>
            <AppTags difficulty='Newbie' />
            <AppTags difficulty='Junior' />
            <AppTags difficulty='Intermediate' />
            <AppTags difficulty='Advanced' />
            <AppTags difficulty='Guru' />
          </ul>
          <button type='button' className='principal__info-btn'>
            <div className='principal__info-btn_container'>
              <span className='principal__info-btn_text'>
                Learn about our challenge types
              </span>
              <HiInformationCircle className='principal__info-btn_icon' />
            </div>
          </button>
        </div>
        <div className='principal__cards'>
          <ul className='principal__cards-list'>
            <Card image={cardData[0].image} />
            <Card image={cardData[1].image} />
            <Card image={cardData[2].image} />
            <Card image={cardData[3].image} />
            <Card image={cardData[4].image} />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
