import Head from 'next/head'
import DeckList from '@/components/decks'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>X-Men Cards</title>
        <meta name="description" content="Relive your childhood with X-Men cards." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1><Link href='/'>X-Men Cards</Link></h1>

      <main className={styles.main}>
        {/* A component that displays a list of decks */}
        <DeckList />
      </main>
    </>
  )
}
