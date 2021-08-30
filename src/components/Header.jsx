import Clock from 'react-live-clock';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to='/'>
                <h1>NC-Express 📰</h1>
            </Link>
            <Clock className='clock' format={'HH:mm'} ticking={true}/>
        </header>
    );
};

export default Header;