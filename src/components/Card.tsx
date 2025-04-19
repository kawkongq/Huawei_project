'use client'
import styles from './card.module.css'
import Image from 'next/image';
import { useState, useEffect } from 'react'

interface Spot {
  name: string
  address: string
  tel: string
  imgUrl: string
}

interface Props {
    name: string
  }

export default function Productcard({ name }: { name: string }) {
    const [spots, setSpots] = useState<Spot[]>([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (!name) return
        setLoading(true)
        fetch(`/api/province/${encodeURIComponent(name)}`)
            .then((res) => res.json())
            .then((data) => {
                setSpots(data.spots || [])
            })
            .finally(() => setLoading(false))
    }, [name])

    if (!name) return null;
    if (loading) return <div>Loading…</div>;
    if (spots.length === 0) return <div>No spots found for {name}</div>;


    return (
        <div className={styles.card}>
      <h1 className='text-3xl text-black text-center font-bold sticky top-0'>{name}</h1>

      {loading && <p className='text-center'>Loading…</p>}
      {!loading && spots.length === 0 && <p className='text-center'>No spots found.</p>}

      <div className={styles.scrollable}>
        {(!loading ? spots : [])
          .slice(0, 3)
          .map((spot, idx) => (
            <div className={styles.seconddiv} key={idx}>
              <div className={styles.ribbon}>{`TOP ${idx + 1}`}</div>
              <div className={styles.imageWrapper}>
                <Image
                  src={spot.imgUrl}
                  alt={spot.name}
                  fill
                  objectFit='cover'
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{spot.name}</h3>
                <div className={styles.meta}>
                  <span className={styles.rating}>
                    4.7<span className={styles.outOf}>/5</span>
                  </span>
                  <span className={styles.reviews}>72,414 reviews</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
