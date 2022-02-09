import Link from 'next/link';
import styling from '../../styles/Main.module.css';
import {useEffect, useState} from 'react';
import clsx from 'clsx';

function HeaderLinks() {
    const [menuActive, setMenuActive] = useState(false);

    function toggleMenu() {
        setMenuActive(!menuActive);
    }

    const threeBarStyle = clsx(styling.threeBarMenu, menuActive ? styling.threeBarMenuActive : styling.threeBarMenuInactive);
    const expandStyle = clsx(styling.expandMenu, !menuActive && styling.expandMenuActive);
    
    return (
        <div className={styling.headerLinksCont}>
            <div className={styling.miniMenu} onClick={toggleMenu}>
                <div className={threeBarStyle}></div>
            </div>
            <div className={expandStyle}>
                <div>
                    <Link href='/About' ><a>About</a></Link>
                    <Link href='/Contact' ><a>Contact</a></Link>
                    <Link href='/Donate' ><a>Donate</a></Link>
                    <Link href='/JoinOurTeam' ><a>Join Our Team</a></Link>
                </div>
                <Link href='/SignIn'><a className={styling.signin}>Sign In / Register</a></Link>
            </div>
        </div>
    )
}

export default HeaderLinks;