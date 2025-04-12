import styles from './banner.module.css';
import Image from 'next/image';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src={'/img/background.jpg'}
            alt='cover'
            fill = {true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1>Vaccine Service Center</h1>
                <h3>vaccine for everyone</h3>
                <h5>Today - 30 Feb</h5>
            </div>
        </div>
    )
}