import React from 'react';
// importing links so that we can prevent the default behaviour of the tags
import Link from './Link';

const Header = () => {
    return (
    <div className = "ui horizontal bulleted list">
        <Link href='/' className="item">Accordion</Link>
        <Link href='/search' className="item">Search</Link>
        <Link href='/translate' className="item">Translate</Link>
        <Link href='/dropdown' className="item">Dropdown</Link>
    </div>
    );
}

export default Header;