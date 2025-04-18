import styles from './card.module.css'
import Image from 'next/image';

export default function Productcard() {
    return (
        <div className={styles.card}>
            <div className={styles.seconddiv}>
                <div className={styles.ribbon}>TOP 1</div>
                <div className={styles.imageWrapper}>
                    <Image
                    src="/img/card1.jpg"
                    alt="Product Picture"
                    fill
                    objectFit="cover"
                    />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>Hong Kong Disneyland</h3>
                    <div className={styles.meta}>
                    <span className={styles.rating}>
                    4.7<span className={styles.outOf}>/5</span>
                    </span>
                    <span className={styles.reviews}>72,414 reviews</span>
                    </div>
                    
                </div>
            </div>
             

         
            <div className={styles.seconddiv}>
                <div className={styles.ribbon}>TOP 2</div>
                <div className={styles.imageWrapper}>
                    <Image
                    src="/img/card1.jpg"
                    alt="Product Picture"
                    fill
                    objectFit="cover"
                    />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>Hong Kong Disneyland</h3>
                    <div className={styles.meta}>
                    <span className={styles.rating}>
                    4.7<span className={styles.outOf}>/5</span>
                    </span>
                    <span className={styles.reviews}>72,414 reviews</span>
                    </div>
                    
                </div>
            </div>
           

            <div className={styles.seconddiv}>
                <div className={styles.ribbon}>TOP 3</div>
                <div className={styles.imageWrapper}>
                    <Image
                    src="/img/card1.jpg"
                    alt="Product Picture"
                    fill
                    objectFit="cover"
                    />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>Hong Kong Disneyland</h3>
                    <div className={styles.meta}>
                    <span className={styles.rating}>
                    4.7<span className={styles.outOf}>/5</span>
                    </span>
                    <span className={styles.reviews}>72,414 reviews</span>
                    </div>
                    
                </div>
            </div>
        
        
            {/* <div style={{width: "100%",
                        height: "30%",
                        marginTop: "9px",
                        position: "relative"}}>                
                            <Image src={'/img/card1.jpg'} 
                            alt="Product Picture"
                            fill = {true} 
                            objectFit='cover'/>
            </div>
            <div style={{width: "100%",
                        height: "30%",
                        marginTop: "9px",
                        position: "relative"}}>                
                            <Image src={'/img/card1.jpg'} 
                            alt="Product Picture"
                            fill = {true} 
                            objectFit='cover'/>
            </div>
            <div style={{width: "100%",
                        height: "31%",
                        marginTop: "9px",
                        position: "relative"}}>                
                            <Image src={'/img/card1.jpg'} 
                            alt="Product Picture"
                            fill = {true} 
                            objectFit='cover'/>
            </div> */}
            {/* <div style={{width: "100%",
                        height: "35%",
                        position: "relative",               
                        backgroundColor: "black",
                        marginTop: "8px",
                        marginBottom: "8px"}}>
                        
            </div> */}
        </div>
    )
}
