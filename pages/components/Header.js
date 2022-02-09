import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styling from '../../styles/Main.module.css';
import HeaderLinks from './HeaderLinks';

function Header() {
    const [viewportWidth, setViewportWidth] = useState('1100');

    useEffect(() => {
        let isMounted = true;
        window.addEventListener('resize', () => {
            setViewportWidth(window.innerWidth);
        });
        return () => { isMounted = false };
    });

    return (
        <div className={styling.header}>
            <Link href='/' >
                <a>
                    <Image 
                        src='/images/leaf_logo_yellow.svg'
                        height={35}
                        width={35}
                        alt='leaf-logo'
                        className={styling.headerLogo}
                    />
                </a>
            </Link>
            {viewportWidth > 400 ? <h1>RESTORE</h1> : <h1 style={{visibility: 'hidden'}}>RESTORE</h1>}
            <HeaderLinks />
        </div>
    )
}

export default Header;

function min(a, b) {
    if (a >= b) {
        return b;
    } else {
        return a;
    }
}