import styling from '../../styles/Main.module.css';
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';

function TitlePage() {

    const [viewportHeight, setViewportHeight] = useState(1100);
    
    return (
        <div className={styling.titlePage}>
            <div className={styling.titlePageTextCont}>
                <div className={styling.titlePageTextContInner}>
                    <p className={styling.titleSecondary}>ENVIRONMENTAL ACTIVISM</p>
                    <p className={styling.titlePrimary}>AS A COMMUNITY</p>
                </div>
                <p className={styling.bodyText}>Reduce your climate impact and make a difference, <strong>together</strong>.</p>
                <Link href='/SignIn' ><a className={styling.ctaButton}>Join Now</a></Link>
            </div>
            <img
                src='/images/community.svg'
                className={styling.communityImage}
            />
        </div>
    )
}

export default TitlePage;