'use client'
import styles from './card.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface Spot {
  name: string
  address: string
  tel: string
  imgUrl: string
}

interface Props {
  name: string
  onShowDetail: (spotName: string) => void
}

export default function Productcard({ name, onShowDetail }: Props) {
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

  if (!name) return null
  if (loading) return <div>Loading…</div>
  if (spots.length === 0) return <div>No spots found for {name}</div>

  return (
    <div className={styles.card}>
      <h1 className="text-3xl text-black text-center font-bold sticky top-0">{name}</h1>

      <div className={styles.scrollable}>
        {spots.slice(0, 3).map((spot, idx) => (
          <div className={styles.seconddiv} key={idx}>
            <div className={styles.ribbon}>{`TOP ${idx + 1}`}</div>
            <div className={styles.imageWrapper}>
              <Image src={spot.imgUrl} alt={spot.name} fill objectFit="cover" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{spot.name}</h3>
              <div className={styles.meta}>
                <span className={styles.rating}>4.7<span className={styles.outOf}>/5</span></span>
                <span className={styles.reviews}>72,414 reviews</span>
              </div>
            </div>
            <button
              onClick={() => onShowDetail(spot.name)}
              style={{ display: "block", margin: "0 auto" }}
            >
              ดูรายละเอียดเพิ่มเติม
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
