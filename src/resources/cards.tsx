export type Deck = {
    /**
     * The pretty title of the set. 
     */
    prettyTitle: string
    /**
     * The title of the set.  A string of letters and numbers only.
     */
    title: string
    manufacturer: string
    year: number
    /**
     * The number of cards in the set.  Always starts at 1 and the value of `cards` is the set's inclusive upper bound.
     */
    cards: number
    /**
     * The root URL from which to fetch the card images.
     */
    root: string
    /**
     * The number of digits for cards.  Numbers will be filled with this many leading zeroes.
     * @example
     * ```ts
     * lpad: 2
     * > 01,02,03..
     * ```
     * @example
     * ```ts
     * lpad: 3
     * > 001,002,003..
     * ```
     */
    lpad: number
    //todo: special cards
    //TODO add `omit` to Deck type whih is a list of cards to exclude by number

}
type Decks = Deck[]

export const deckList: Decks = [
    {
        prettyTitle: "X-Men '91",
        title: "xmen91",
        manufacturer: "Comic Images",
        year: 1991,
        cards: 90,
        root: "https://uncannyxmen.net/sites/default/files/images/cards/xmen91/",
        lpad: 2
    },
    {
        prettyTitle: "X-Men '92",
        title: "xmen92",
        manufacturer: "Impel",
        year: 1992,
        cards: 100,
        root: "https://uncannyxmen.net/sites/default/files/images/cards/xmen92/",
        lpad: 2
    },
    {
        prettyTitle: "X-Men '93",
        title: "xmen93",
        manufacturer: "Skybox",
        year: 1993,
        cards: 100,
        root: "https://uncannyxmen.net/sites/default/files/images/cards/xmen93/",
        lpad: 2
    },
    {
        prettyTitle: "Fleer '94",
        title: "fleer94",
        manufacturer: "Fleer",
        year: 1994,
        cards: 165,
        root: "https://uncannyxmen.net/sites/default/files/images/cards/fleer94/",
        lpad: 3
    },
    {
        prettyTitle: "Timelines '97",
        title: "timelines97",
        manufacturer: "Fleer/Skybox International",
        year: 1997,
        cards: 82,
        root: "https://uncannyxmen.net/sites/default/files/images/cards/timelines97/",
        lpad: 2
    }
]

