import { Link } from "react-router-dom";

const UserPreview = ({ user }) => {
    return (
        <section>
            <Link to={`users/${user.username}`}>
                <h3>{user.username}</h3>
            </Link>
            <p>{user.name}</p>
            <img src={user.avatar_url} alt=''/>
        </section>
    );
};

export default UserPreview;