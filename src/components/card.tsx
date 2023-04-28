import * as React from 'react';
import ReactCardFlip from "react-card-flip";
import Card from '@mui/material/Card';
import { useRouter } from 'next/router';
import {decks} from '../resources/cards.json'

export default function TradingCard() {
  const { asPath } = useRouter();
  const splitPath = asPath.split('/')
  const set = splitPath[splitPath.length - 2]
  const image = splitPath[splitPath.length - 1]
  const [flip, setFlip] = React.useState(false);
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <Card sx={{ maxWidth: 345 }} variant="elevation">
        <img src={`/img/${set}/${image}-f.jpeg`} onClick={async () => await setFlip(!flip)} />
      </Card>
      <Card sx={{ maxWidth: 345 }} variant="elevation">
        <img src={`/img/${set}/${image}-b.jpeg`} onClick={async () => await setFlip(!flip)} />
      </Card>
    </ReactCardFlip>

  );
}
