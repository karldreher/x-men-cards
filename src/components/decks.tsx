import Link from 'next/link';
import * as React from 'react';
import decks from '../resources/cards.json'

export default function DeckList() {
    const cardDecks = decks.decks
    const links = cardDecks.map((element) => {
        const randomStartCard = element.cards[Math.floor(Math.random()*element.cards.length)]
        return (<li key={element.title}>

            <Link href={`/cards/${element.title}/${randomStartCard}`}>{element.title}</Link>
        </li>)
    })
    return (
        <ul>{links}</ul>
    )
}
