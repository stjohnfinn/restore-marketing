import Head from 'next/head';
import 'React';
import Link from 'next/link';
import styling from '../styles/Main.module.css';
import Image from 'next/image';

function Home() {
    return (
        <div>
            <Head>
                <title>Restore / Make a Difference</title>
                <link rel="preconnect" href={"https://fonts.googleapis.com"}></link>
                <link rel="preconnect" href={"https://fonts.gstatic.com"} crossorigin></link>
                <link href={"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Inter&family=Rubik&display=swap"} rel="stylesheet"></link>
            </Head>
            <div className={styling.header}>
                <Link href='./' >
                    <Image 
                        src='/images/leaf_logo_yellow.svg'
                        height={60}
                        width={60}
                        alt='leaf-logo'
                        className={styling.headerLogo}
                    />
                </Link>
                <h1>RESTORE</h1>
                <div className={styling.headerLinks}>
                    <Link href='/About'><a>About</a></Link>
                    <Link href='/Contact'><a>Contact</a></Link>
                    <Link href='/Register'><a className={styling.signin}>Sign In / Register</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;