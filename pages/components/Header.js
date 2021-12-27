import 'React';
import Link from 'next/link';
import Image from 'next/image';
import styling from '../../styles/Main.module.css';

function Header() {
    const viewportWidth = window.viewportWidth;

    if (viewportWidth >= 1100) {
        return (
            <div className={styling.header}>

            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }
}
