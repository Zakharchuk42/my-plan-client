import React from 'react'
import BlockHeader from '../BlockHeader/BlockHeader'
import BlockTable from '../BlockTable/BlockTable'

import './Weather.scss'

const Weather = () => {
  return (
    <div className="Weather">
      <BlockHeader>
        <div className="Weather__title">
          Weather
        </div>
      </BlockHeader>
      <BlockTable>
        There will be weather...
      </BlockTable>
    </div>
  )
}

export default Weather