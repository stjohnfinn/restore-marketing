import Image from 'next/image';
import Link from 'next/link';
import styling from '../../styles/Main.module.css';

function Community() {
    return (
        <div className={styling.communityOuterCont}>
            <div className={styling.communityInnerCont}>
                <div className={styling.community}>
                    <h1 className={styling.sectionTitle}>BUILDING A COMMUNITY</h1>
                    <div className={styling.ctaSectionContent}>
                        <div>
                            <p className={styling.bodyText}>We may have caused significant damage to our planet, but we still have time to save it.</p>
                            
                            <p className={styling.bodyText}>RESTORE helps you reduce your impact on the climate by reminding you to complete small, but helpful tasks, 
                            or Contributions, throughout your day</p>

                            <p className={styling.bodyText}>RESTORE creates a community of change-makers, like you, to surround and support each other. RESTORE will 
                            show you what your friends are doing to save the planet, and which contributions are doing the best around the world.</p>
                        </div>
                        <Link href='signin' ><a className={styling.ctaButton}>Become a Member</a></Link>
                    </div>
                    <Image
                        src={'/images/together.svg'}
                        height={400}
                        width={400}
                    />
                </div>
            </div>
        </div>
    )
}

export default Community;