import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function Card_de( {Name , imgSrc , location , Description} : {Name:string , imgSrc:string , location:string , Description:string} ) {
  return (
    <InteractiveCard>
      <div style={{ width: "100%", height: "70%", position: "relative" }}>
        <Image
          src={imgSrc}
          alt="Product Picture"
          fill={true}
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <div style={{
        width: "100%",
        height: "30%",
        padding: "16px",
        color: "#64748b", 
        fontWeight: 500
      }}>
            <div className='font-bold'>
                {Name}
            </div>
            <div className='flex flex-row'>
                <div className='font-bold'>
                  Location
                </div>
                <div>
                {location}
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='font-bold'>
                  Description
                </div>
                <div>
                {Description}
                </div>
            </div>
        </div>
  
    </InteractiveCard>
  );
}
