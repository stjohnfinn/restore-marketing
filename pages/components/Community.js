import Link from 'next/link';
import styling from '../../styles/Main.module.css';

function Community() {
    return (
        <div className={styling.community}>
            <div className={styling.content}>
                <h1 className={styling.ctaSectionTitle}>BUILDING A COMMUNITY</h1>
                <div className={styling.ctaSectionContentContainer}>
                    <div className={styling.ctaSectionContent}>
                        <div>
                            <p className={styling.bodyText}>We may have caused significant damage to our planet, but <strong>we still have time to save it.</strong></p>
                            
                            <p className={styling.bodyText}><strong>RESTORE</strong> helps you reduce your impact on the climate by reminding you to complete small, but helpful tasks, 
                            or <strong>Contributions</strong>, throughout your day, as well as showing you <strong>Contributions</strong> from around your community.</p>
                        </div>
                        <Link href='signin' ><a className={styling.ctaButton}>Become a Member</a></Link>
                    </div>
                    <img
                        src={'/images/together.svg'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Community;