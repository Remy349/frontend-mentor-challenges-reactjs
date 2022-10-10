import React from 'react'
import { HiInformationCircle } from 'react-icons/hi'
import Card from './components/Card'

function App () {
  return (
    <div className='principal'>
      <div className='principal__container'>
        <div className='principal__info'>
          <span className='principal__info-text'>
            Learn about our challenge types
            <HiInformationCircle className='principal__info-icon' />
          </span>
        </div>
        <div className='principal__cards'>
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
