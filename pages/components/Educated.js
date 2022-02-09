import Link from 'next/link';
import styling from '../../styles/Main.module.css';

function Educated() {
    return (
        <div className={styling.educated}>
            <div className={styling.content}>
                <h1 className={styling.ctaSectionTitle} data-aos={'fade-up'}>STAYING EDUCATED</h1>
                <div className={styling.ctaSectionContentContainer}>
                    <div className={styling.ctaSectionContent} data-aos={'fade-up'}>
                        <div>
                            <p className={styling.bodyText}>In today's agenda-driven news world, it's important to stay up to date with reliable resources.</p>
                            
                            <p className={styling.bodyText}><strong>RESTORE</strong> provides users with a <strong>personally curated library</strong> of educational articles and 
                            videos regarding climate change.</p>
                        </div>
                        <Link href='/SignIn' ><a className={styling.ctaButton}>Explore</a></Link>
                    </div>
                    <img
                        src={'/images/learning.svg'}
                        data-aos={'fade-up'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Educated;