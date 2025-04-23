// components/DetailCard.tsx
import React from "react";
import Card_de from "./Card_da";
import styles from './card2.module.css'

interface DetailCardProps {
  spotName: string;
  onClose: () => void;
}

const DetailCard: React.FC<DetailCardProps> = ({ spotName, onClose }) => {
  return (
    <div className={styles.card}>
    <div className={styles.scrollable}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ margin: 0, color: "black" }}>{spotName}</h3>
        <button onClick={onClose} style={{
          fontWeight: "bold", border: "none", background: "none", fontSize: "18px", cursor: "pointer", color: "black"
        }}>✖</button>
      </div>
        <Card_de Name='Moms kitchen' imgSrc='/img/Mom’s_Kitchen.png' location=": 2R6R+RWM, อ่าวนาง, อำเภอเมืองกระบี่, กระบี่ 81180" Description=": ร้านเปิดให้บริการทุกวัน ตั้งแต่เวลา 10:00 น. ถึง 23:00 น. มีเมนูอาหารไทยหลากหลาย รวมถึงเมนูมังสวิรัติและวีแกน เช่น แกงพะแนง แกงมัสมั่น"/>
        <Card_de Name='Local Thai Food' imgSrc="/img/Local_Thai_Food.jpg" location=": ร้านตั้งอยู่ในป่าระหว่างหาดไร่เลย์ตะวันออกและตะวันตก จังหวัดกระบี่ ประเทศไทย 81180" Description=": ร้านนี้มีบรรยากาศเรียบง่ายและเป็นกันเอง เหมาะสำหรับนักท่องเที่ยวที่ต้องการสัมผัสรสชาติอาหารไทยแท้ ๆ ในราคาย่อมเยา​"/>
    </div>
    </div>
  );
};


export default DetailCard;
