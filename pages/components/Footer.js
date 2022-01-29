import Link from "next/link";
import Image from 'next/image';
import styling from '../../styles/Main.module.css';

function Footer() {
    return (
        <div className={styling.footer}>
            <div className={styling.footerInnerCont}>
                    {/* instagram, github, twitter, google play store, apple store, terms and conditions, privacy policy, copyright restore all rights reserved*/}
                <div className={styling.footerTitle}>
                    <Image 
                        height={35}
                        width={35}
                        src='/images/leaf_logo.svg'
                    />
                    <h1>RESTORE</h1>
                </div>
                
                <div className={styling.footerLinkMainCont} >
                    <div className={styling.footerCont}>
                        <h1>SOCIAL</h1>
                        <Link href='/' ><a className={styling.footerLink} >Instagram</a></Link>
                        <Link href='/' ><a className={styling.footerLink} >Source Code</a></Link>
                        <Link href='/' ><a className={styling.footerLink} >Twitter</a></Link>
                    </div>

                    <div className={styling.footerCont}>
                        <h1>DOWNLOAD</h1>
                        <Link href='/' ><a className={styling.footerLink} >Google Play Store</a></Link>
                        <Link href='/' ><a className={styling.footerLink} >Apple Store</a></Link>
                    </div>

                    <div className={styling.footerCont}>
                        <h1>LEGAL</h1>
                        <Link href='/' ><a className={styling.footerLink} >Terms and Conditions</a></Link>
                        <Link href='/' ><a className={styling.footerLink} >Privacy Policy</a></Link>
                    </div>
                </div>
                
                <p className={styling.footerTag}><span>&copy;</span> Restore. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;