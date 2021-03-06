import Head from 'next/head'
import Banner from '../src/components/Banner'
import MenuThumbnail from '../src/containers/MenuThumbnail'
import Footer from '../src/components/footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <title>Lasya collections</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Banner />
          <MenuThumbnail />
      </main>
      <Footer />
    </div>
  )
}
