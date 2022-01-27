import React from 'react'
import withGraphQl from './CardHoc'

import './Card.scss'
import BlockText from '../BlockText/BlockText'
import BlockFooter from '../BlockFooter/BlockFooter'

const Card = ({title, text, delNote, editNote, startTimeProps, endTimeProps, colorProps}) => {

  return(
    <div className="Card" >
      <div className="Card__title" style={{background: colorProps ? colorProps : '#183153'}}>
        {title}
      </div>
      <BlockText>
        {text}
      </BlockText>
      <div className="Card__footer">
        <BlockFooter
          color={colorProps}
          title={title}
          text={text}
          delNote={delNote}
          editNote={editNote}
          endTime={endTimeProps}
          startTime={startTimeProps} />
      </div>
    </div>
  )
}

export default withGraphQl(Card)
