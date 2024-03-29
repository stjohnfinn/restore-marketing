import Link from 'next/link';
import styling from '../../styles/Main.module.css';

function Accountable() {
    return (
        <div className={styling.accountable}>
            <div className={styling.content}>
                <h1 className={styling.ctaSectionTitle} data-aos={'fade-up'}>HELD ACCOUNTABLE</h1>
                <div className={styling.ctaSectionContentContainer}>
                    <div className={styling.ctaSectionContent} data-aos={'fade-up'}>
                        <div>
                            <p className={styling.bodyText}>Large corporations that rely on fossil fuels for manufacturing and transportation are responsible for much 
                            of the <strong>Climate Change</strong> happening today.</p>
                            
                            <p className={styling.bodyText}><strong>RESTORE</strong> features a <strong>Sustainability Search</strong> tool that helps you find out 
                            if your favorite companies are conducting their business sustainably.</p>
                        </div>
                        <Link href='/SignIn' ><a className={styling.ctaButton}>Investigate</a></Link>
                    </div>
                    <img
                        src={'/images/search.svg'}
                        data-aos={'fade-up'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Accountable;