import { getUsers } from '../../utils/api'
import UserPreview from './UserPreview'
import { useState, useEffect } from 'react';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(apiUsers => {
        setUsers(apiUsers)
      })
    }, [])
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