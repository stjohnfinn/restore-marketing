import Head from 'next/head';
import 'React';
import Link from 'next/link';
import styling from '../styles/Main.module.css';
import Image from 'next/image';
import Header from './components/Header';
import TitlePage from './components/TitlePage';
import Community from './components/Community';
import Accountable from './components/Accountable';
import Educated from './components/Educated';
import Mission from './components/Mission';

function Home() {
    return (
        <div>
            <Head>
                <title>Restore / Make a Difference</title>
                <link rel="preconnect" href={"https://fonts.googleapis.com"}></link>
                <link rel="preconnect" href={"https://fonts.gstatic.com"} crossorigin></link>
                <link href={"https://fonts.googleapis.com/css2?family=Archivo:wght@500&family=IBM+Plex+Sans&family=Inter&family=Rubik&display=swap"} rel="stylesheet"></link>
                <link rel='icon' href='./images/leaf_logo.png' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <div>
                <Header />
                <div className={styling.body}>
                    <TitlePage />
                    <Community />
                    <Accountable />
                    <Educated />
                    <Mission />
                </div>
            </div>
        </div>
    )
}

export default Home;