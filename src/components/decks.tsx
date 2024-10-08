import Link from 'next/link';
import styles from '../styles/decks.module.css'
import deckList from '@/resources/cards'

export default function DeckList() {
    const links = deckList.map((element) => {
        const randomStartCard = Math.floor(Math.random() * element.cards) as number
        const startCard = (String(Number(randomStartCard) + 1)).padStart(element.lpad, "0")
        return (
            <div className={styles.deckcontainer} key={element.title}>
            <Link href={`/cards/${element.title}/${startCard}`} suppressHydrationWarning>
                <li className={styles.deckslist} key={element.title}>
                <h2>
                    {element.title}
                </h2>
                <div className={styles.deckdescription}>manufacturer: {element.manufacturer}</div>
                <div className={styles.deckdescription}>year: {element.year}</div>
                <div className={styles.deckdescription}>cards: {element.cards}</div>
                </li>
            </Link>
            </div>
        )
    })
    return (
        <div>
            <h2 className={styles.h2}>Select a box below to explore the cards in that set.</h2>
            <br/>
            <ul className={styles.ul}>{links}</ul>
        </div>

    )
}
