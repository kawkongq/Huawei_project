import styles from './card.module.css'
import Image from 'next/image';

export default function Productcard() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/card1.jpg'}
                alt='Product Picture'
                fill = {true}
                objectFit='cover'
                />
            </div>
            <div className={styles.cardtext}>
            A vaccine is a biological preparation that provides active acquired immunity to a particular infectious or malignant disease
            </div>
        </div>
    )
}
