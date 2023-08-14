import Link from 'next/link';
import * as React from 'react';
import styles from '../styles/custom.module.css'
import decks from '../resources/cards.js'

export default function DeckList() {
    const links = decks.map((element) => {
        const randomStartCard = Math.floor(Math.random() * element.cards)
        return (
                <li className={styles.deckslist} key={element.title}>
                    <h2>
                        <Link href={`/cards/${element.title}/${randomStartCard}`}>{element.title}</Link>
                    </h2>
                    <div className={styles.deckdescription}>manufacturer: {element.manufacturer}</div>
                    <div className={styles.deckdescription}>year: {element.year}</div>
                    <div className={styles.deckdescription}>cards: {element.cards}</div>
                </li>
        )
    })
    return (
        <div>
            <h2>Click a link below to explore the cards in that set.</h2>
            <br></br>
            <ul className={styles.ul}>{links}</ul>
        </div>

    )
}
