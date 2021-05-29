import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar/Navbar'
import { Cover } from '../components/Cover/Cover'
import { CanvasObject } from '../components/Canvas/CanvasObject'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adazolhub</title>
        <meta name="description" content="end of month portfolio progress for the month of may" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.top_bar}></div>
        <div className={styles.main_navbar}>
          <Navbar  />
        </div>
        <main>
          <div className={styles.main_container}>
            <Cover/>
              {/* <CanvasObject/> */}
          </div>
        </main>
    </div>
  )
}
