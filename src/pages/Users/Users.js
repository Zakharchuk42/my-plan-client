import React from 'react'
import withHoc from './UsersHoc'
import UserCard from '../../components/UserCard/UserCard'

import './Users.scss'

const Users = ({data}) => {

  const {getAllUsers = [], loading} = data

  return (
    loading ? ('LOADING>>>>') : (
      <div className="User__list">
        {
          getAllUsers.map((user)=>{
            return(
              <UserCard
                key={user.id}
                data={user}
              />
            )
          })
        }
      </div>
    )

  )
}

export default withHoc(Users)