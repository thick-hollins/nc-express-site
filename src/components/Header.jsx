const Header = () => {
    return (
        <header>
            <h1>NC-Express 📰</h1>
            <p>{new Date().toLocaleString()}</p>
        </header>
    );
};

export default Header;