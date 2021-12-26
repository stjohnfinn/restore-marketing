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
                <link rel={"preconnect"} href={"https://fonts.googleapis.com"}></link>
                <link rel={"preconnect"} href={"https://fonts.gstatic.com"} crossorigin></link>
                <link href={"https://fonts.googleapis.com/css2?family=Rubik&display=swap"} rel={"stylesheet"}></link>
                <link href={"https://fonts.googleapis.com/css2?family=Inter&display=swap"} rel={"stylesheet"}></link>
            </Head>
            <div className={styling.header}>
                <Image 
                    src='/images/leaf.png'
                    height={95}
                    width={95}
                    alt='leaf-logo'
                />
                <h1>RESTORE</h1>
                <Link href='/About'><a>About</a></Link>
                <Link href='/Contact'><a>Contact</a></Link>
                <Link href='/Register'><a className={styling.signin}>Sign In / Register</a></Link>
            </div>
        </div>
    )
}

export default Home;