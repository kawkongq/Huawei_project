'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import Productcard from '@/components/Card'
import Map from '@/components/Map'

export default function Home() {
  return (
    <main>
      {/* <Banner/> */}
      <Map/>
      {/* <div style={{margin:"20px"}}>
      <Productcard/>
      </div> */}
    </main>
  )
}
