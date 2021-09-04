import { getUsers } from '../../utils/api'
import UserPreview from './UserPreview'
import { useState, useEffect } from 'react';
import Loader from "react-loader-spinner"


const Users = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      setIsLoading(true)
        getUsers().then(apiUsers => {
        setUsers(apiUsers)
        setIsLoading(false)
      })
    }, [])
    if(isLoading) return (
      <div className='loading-container'>
        <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
    )
      return (
          <div>
            <ul>
              {users.map(user => (
                <li key={user.username}>
                  <UserPreview user={user} />
                </li>
              ))}
            </ul>
          </div>
      );
};

export default Users;