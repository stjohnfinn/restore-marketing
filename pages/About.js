import Head from 'next/head';
import styling from '../styles/Main.module.css';
import Header from './components/Header';

function About() {
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
            <Header />
        </div>
    )
}

export default About;