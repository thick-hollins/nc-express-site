import homeLogo from '../svg/basic_home.svg'
import writeLogo from '../svg/basic_notebook_pen.svg'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>HOME <button><img src={homeLogo} /></button></li>
                <li>USERS <button><img src={homeLogo} /></button></li>
                <li>WRITE <button><img src={writeLogo} /></button></li>
            </ul>
        </nav>
    );
};

export default Nav;