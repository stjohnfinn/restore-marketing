import Image from 'next/image';
import Link from 'next/link';
import styling from '../../styles/Main.module.css';

function Educated() {
    return (
        <div className={styling.educatedOuterCont}>
            <div className={styling.educatedInnerCont}>
                <div className={styling.educated}>
                    <div className={styling.content}>
                        <h1 className={styling.ctaSectionTitle}>STAYING EDUCATED</h1>
                        <div className={styling.ctaSectionContentContainer}>
                            <div className={styling.ctaSectionContent}>
                                <div>
                                    <p className={styling.bodyText}>In today's agenda-driven news world, it's important to stay up to date with reliable resources.</p>
                                    
                                    <p className={styling.bodyText}><strong>RESTORE</strong> provides users with a <strong>personally curated library</strong> of educational articles and 
                                    videos regarding climate change.</p>
                                </div>
                                <Link href='signin' ><a className={styling.ctaButton}>Explore</a></Link>
                            </div>
                            <Image
                                src={'/images/learning.svg'}
                                height={397}
                                width={595}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Educated;