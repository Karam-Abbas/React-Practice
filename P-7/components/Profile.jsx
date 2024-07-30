import React,{useContext} from 'react'
import UserContext from '../Context/CreateUserContext';
function Profile() {
    const {user} = useContext(UserContext);

    if(!user) return <h1>Profile: No user Found</h1>
  return (
    <div>Profile:{user.username} </div>
  )
}

export default Profile