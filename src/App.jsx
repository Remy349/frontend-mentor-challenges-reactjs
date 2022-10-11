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
            <Card
              plan={cardData[0].plan}
              image={cardData[0].image}
              content={cardData[0].content}
            />
            <Card
              plan={cardData[1].plan}
              image={cardData[1].image}
              content={cardData[1].content}
            />
            <Card
              plan={cardData[2].plan}
              image={cardData[2].image}
              content={cardData[2].content}
            />
            <Card
              plan={cardData[3].plan}
              image={cardData[3].image}
              content={cardData[3].content}
            />
            <Card
              plan={cardData[4].plan}
              image={cardData[4].image}
              content={cardData[4].content}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
