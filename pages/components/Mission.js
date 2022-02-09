import Link from 'next/link';
import styling from '../../styles/Main.module.css';

function Mission() {
    return (
        <div className={styling.mission}>
            <div className={styling.content}>
                <h1 className={styling.ctaSectionTitle} data-aos={'fade-up'}>OUR MISSION</h1>
                <div className={styling.ContentContainer}>
                    <div className={styling.ctaSectionContent} data-aos={'fade-up'}>
                        <div>
                            <p className={styling.bodyText}>Here at <strong>RESTORE</strong>, we want to create a more educated and more impact-conscious population, in order to reverse the damage and preserve the planet 
                            for future generations.</p>

                            <p className={styling.bodyText}><strong>RESTORE</strong> wasn't created to make money, so we've decided to donate any revenue that we generate to <strong>charities and companies working to save the planet.</strong></p>

                            <p className={styling.bodyText}>We promise to keep anything we publish on our site transparent and bias-free because we believe that's the only way for this to work.</p>
                        </div>
                        <img
                            src={'/images/forest.svg'}
                        />
                    </div>
                </div>
            </div>
            <div className={styling.finalCTA} data-aos={'fade-up'}>
                <h2>Together, we can reverse the damage we've done.</h2>
                <Link href='/SignIn' ><a className={styling.ctaButton}>Join Now</a></Link>
            </div>
        </div>
    )
}

export default Mission;