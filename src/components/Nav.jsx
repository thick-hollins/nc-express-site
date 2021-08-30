import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to='/'><li>home</li></Link>
                <Link to='/topics'><li>topics</li></Link>
                <Link to='/users'><li>users</li></Link>
                <Link to='/'><li>write</li></Link>
            </ul>
        </nav>
    );
};

export default Nav;