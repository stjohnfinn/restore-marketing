import Head from 'next/head';
import styling from '../styles/Main.module.css';
import Header from './components/Header';

function Donate() {
    return (
        <div>
            <Head>
                <title>Restore / Make a Difference</title>
                <link rel="preconnect" href={"https://fonts.googleapis.com"}></link>
                <link rel="preconnect" href={"https://fonts.gstatic.com"} crossorigin></link>
                <link href={"https://fonts.googleapis.com/css2?family=Archivo:wght@500&family=IBM+Plex+Sans&family=Inter:wght@450&family=Rubik&display=swap"} rel="stylesheet"></link>
                <link href={"https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap"} rel="stylesheet"></link>
                <link rel='stylesheet' href='./node_modules/aos/dis/aos.css' ></link>
                <link rel='icon' href='./images/leaf_logo.png' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Header />
            <div className={styling.marketingBody}>
                <div className={styling.marketingBodyContent}>
                    <h1>DONATE TO OUR CAUSE</h1>
                    <p>
                        <strong>RESTORE,</strong> as an organization, is fully dedicated to the cause of climate change.
                        Because of this, we operate as a nonprofit organization. We try our absolute best to 
                        run this app without the idea of money in our head, in order to focus more on our actual mission.
                        With that said, we appreciate any donation, big or small. We will also be completely transparent 
                        about our use of your donation, if you decide to provide an associated email.
                    </p>
                    <p>
                        On behalf of everyone here at <strong>RESTORE,</strong> we appreciate everything you do for us!
                    </p>
                    <div className={styling.donateEntry}>
                        <div>
                            <label>Amount</label>
                            <input type='number' placeholder='5'/>
                        </div>
                        <input type='text' placeholder='Enter Email (Optional)' />
                    </div>
                    <button>PayPal</button>
                    <button>Credit Card</button>
                </div>
            </div>
        </div>
    )
}

export default Donate;