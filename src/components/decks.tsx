import Link from 'next/link';
import * as React from 'react';
import decks from '../resources/cards.js'

export default function DeckList() {
    const links = decks.map((element) => {
        const randomStartCard = Math.floor(Math.random() * element.cards)
        return (
            <li key={element.title}>
                <h2>
                    <Link href={`/cards/${element.title}/${randomStartCard}`}>{element.title}</Link>
                </h2>
                <div className='description'>{element.description}</div>
                <div className='description'>{element.cards} cards</div>
            </li>)
    })
    return (
        <div>
			<p>Click a link below to explore the cards in that set.</p>
            <br></br>
            <ul>{links}</ul>
        </div>

    )
}
