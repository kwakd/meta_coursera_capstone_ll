import logo from '../img/logo.png';

import Nav from './Nav';

function Header()
{
    return (
        <header>
            <img src={logo} alt="Little Lemon Logo" />
            <Nav />
        </header>
    );
};

export default Header;