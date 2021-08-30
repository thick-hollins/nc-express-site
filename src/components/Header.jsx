import Clock from 'react-live-clock';

const Header = () => {
    return (
        <header>
            <h1>NC-Express 📰</h1>
            <Clock className='clock' format={'HH:mm'} ticking={true}/>
        </header>
    );
};

export default Header;