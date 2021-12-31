import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styling from '../styles/Main.module.css';
import Header from './components/Header';

function About() {
    return (
        <div>
            <Head>
                <title>Restore</title>
            </Head>
            <Header />
            <h1>About Us</h1>
            <p className={styling.header}>some information</p>
            <h3><Link href='./'><a>Home</a></Link></h3>
            <Image
                src='/images/snoop.jpg'
                height={125}
                width={125}
                alt='snoop dogg'
            />
        </div>
    )
}

export default About;