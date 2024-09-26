import Head from 'next/head'
import Header from '@/components/header'
import DeckList from '@/components/decks'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>X-Men Cards</title>
        <meta name="description" content="Relive your childhood with X-Men cards." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>    
      <Header/>

      <main className={styles.main}>
        {/* A component that displays a list of decks */}
        <DeckList />
      </main>
    </>
  )
}
