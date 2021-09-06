import { Link } from "react-router-dom";

const UserPreview = ({ user }) => {
    return (
        <section  className='user-preview__box' >
            <div className='user-text'>
                <Link to={`/users/${user.username}`}>
                    <h3 className='username-title'>{user.username}</h3>
                </Link>
                <p>{user.name}</p>
            </div>
            <img className='user-preview__avatar' src={user.avatar_url} alt=''/>
        </section>
    );
};

export default UserPreview;