import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const {user}=useContext(UserContext)
  if(!user) return <h1>User not Logged In</h1>
  return (
    <div>Profile : {user.username}</div>
  )
}

export default Profile