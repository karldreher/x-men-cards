type Deck = {
    title: string
    manufacturer: string
    year: number
    cards: number
    root: string
    /**
     * The number of digits for card numbers below 10.
     * @example
     * ```ts
     * lpad: 2
     * > 01,02,03..
     * ```
     */
    lpad: number
    //todo: special cards

}
type Decks = Deck[]

const deckList: Decks = [
    {
        "title": "X-Men '92",
        "manufacturer": "Impel",
        "year": 1992,
        "cards": 100,
        "root": "https://uncannyxmen.net/sites/default/files/images/cards/xmen92/",
        "lpad": 2
    },

    {
        "title": "X-Men '93",
        "manufacturer": "Skybox",
        "year": 1993,
        "cards": 100,
        "root": "https://uncannyxmen.net/sites/default/files/images/cards/xmen93/",
        "lpad": 2
    }
]

export default deckList
