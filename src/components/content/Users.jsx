import UserPreview from './UserPreview'
import LoaderWrapper from '../buttons/LoaderWrapper'
import { useUsers } from '../../utils/hooks';

const Users = () => {
  const { users, isLoading } = useUsers()

    if(isLoading) return (
      <LoaderWrapper />
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