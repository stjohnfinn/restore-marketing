import Head from 'next/head';
import 'React';
import Link from 'next/link';
import styling from '../styles/Main.module.css';
import Image from 'next/image';
import Header from './components/Header';

function Home() {
    return (
        <div>
            <Head>
                <title>Restore / Make a Difference</title>
                <link rel="preconnect" href={"https://fonts.googleapis.com"}></link>
                <link rel="preconnect" href={"https://fonts.gstatic.com"} crossorigin></link>
                <link href={"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Inter&family=Rubik&display=swap"} rel="stylesheet"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Header />
        </div>
    )
}

export default Home;