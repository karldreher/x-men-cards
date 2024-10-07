'use client'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import TradingCard from '@/components/card';
import { useRouter } from 'next/router'
import RotateCard from '@/components/rotate';
import NavButton from '@/components/navbutton';
import Header from '@/components/header';

import { Table, TableCell, TableRow } from '@mui/material';
import deckList from '@/resources/cards';

export default function Home() {

  const router = useRouter();
  if(router.isReady===false)
  {
    return <></>
  }
  const splitPath = router.asPath.split('/')
  const set = splitPath[splitPath.length - 2]
  if (set===undefined || set===""){
    router.push('/')
  }
  const root = deckList.filter(a=>a.title===set)[0].root
  const lpad = deckList.filter(a=>a.title===set)[0].lpad
  const image = splitPath[splitPath.length - 1]
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

        <TradingCard image={image} set={set} root={root} lpad={lpad}/>

        <center>
          {/* Table below card for navigation  */}
          <Table>
            <TableRow>
              
              {/* Navbutton for previous card  */}
              <TableCell>
              <NavButton direction="prev" lpad={lpad}/>
              </TableCell>

              {/* Button for rotating the card  */}
              <TableCell>
                <RotateCard />
              </TableCell>

              {/* Navbutton for next card */}
              <TableCell>
              <NavButton direction="next" lpad={lpad}/>
              </TableCell>

            </TableRow>
          </Table>
        </center>
      </main>
    </>
  )
}
