import Link from 'next/link';
import * as React from 'react';
import decks from '../resources/cards.js'

export default function DeckList() {
    const links = decks.map((element) => {
        const randomStartCard = Math.floor(Math.random()*element.cards)
        return (<li key={element.title}>

            <Link href={`/cards/${element.title}/${randomStartCard}`}>{element.title}</Link>
        </li>)
    })
    return (
        <ul>{links}</ul>
    )
}
