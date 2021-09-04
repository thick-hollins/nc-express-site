import { Link } from "react-router-dom";

const UserPreview = ({ user }) => {
    return (
        <section  className='user-list-box' >
            <div className='user-text'>
                <Link to={`users/${user.username}`}>
                    <h3 className='username-title'>{user.username}</h3>
                </Link>
                <p>{user.name}</p>
            </div>
            <img className='avatar' src={user.avatar_url} alt=''/>
        </section>
    );
};

export default UserPreview;