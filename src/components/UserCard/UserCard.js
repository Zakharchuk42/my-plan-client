import React from 'react'

import './UserCard.scss'

const UserCard = ({data}) => {
  return (
    <div className="UserCard">
      <div className="UserCard__image">
        <img src={data.avatar} alt="avatar" />
      </div>
      <div className="UserCard__info">
        <div className="UserCard__name">
          <span>Name:</span> {data.username}
        </div>
        <div className="UserCard__age">
          <span>Age:</span> {data.age}
        </div>
        <div className="UserCard__Gender">
          <span>Gender:</span> {data.sex}
        </div>
        <div className="UserCard__goal">
          <span>Goal:</span> {data.goal}
        </div>
      </div>
    </div>
  )
}

export default UserCard