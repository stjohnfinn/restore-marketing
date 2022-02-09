import Head from 'next/head';
import React from 'react';
import styling from '../styles/Main.module.css';
import Header from './components/Header';
import TitlePage from './components/TitlePage';
import Community from './components/Community';
import Accountable from './components/Accountable';
import Educated from './components/Educated';
import Mission from './components/Mission';
import Transition from './components/Transition';
import Footer from './components/Footer';

function Home() {
    return (
        <div>
            <Head>
                <title>Restore / Make a Difference</title>
                <link rel="preconnect" href={"https://fonts.googleapis.com"}></link>
                <link rel="preconnect" href={"https://fonts.gstatic.com"} crossorigin></link>
                <link href={"https://fonts.googleapis.com/css2?family=Archivo:wght@500&family=IBM+Plex+Sans&family=Inter&family=Rubik&display=swap"} rel="stylesheet"></link>
                <link href={"https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap"} rel="stylesheet"></link>
                <link rel='icon' href='./images/leaf_logo.png' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <div>
                <Header />
                <div className={styling.body}>
                    <TitlePage />
                    <Transition start={'#fff5dc'} one={'#88ce7d'} two={'#469838'} end={'#27641e'} />
                    <Community />
                    <Transition start={'#27641e'} one={'#A57F4A'} two={'#916B36'} end={'#7D5722'} />
                    <Accountable />
                    <Transition start={'#7D5722'} one={'#9CC6F5'} two={'#92BCEB'} end={'#88B2E1'} />
                    <Educated />
                    <Transition start={'#88B2E1'} one={'#BCC4CC'} two={'#A8B0B8'} end={'#949CA4'} />
                    <Mission />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home;