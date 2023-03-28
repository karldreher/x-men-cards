import * as React from 'react';
import ReactCardFlip from "react-card-flip";
import Card from '@mui/material/Card';
import { useRouter } from 'next/router';

export default function ActionAreaCard() {
  const { asPath } = useRouter();
  const imageSplit = asPath.split('/')
  const image = imageSplit[imageSplit.length - 1]
  const [flip, setFlip] = React.useState(false);
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <Card sx={{ maxWidth: 345 }} variant="outlined">
        <img src={`/img/${image}-f.jpeg`} onClick={async () => await setFlip(!flip)} />
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <img src={`/img/${image}-b.jpeg`} onClick={async () => await setFlip(!flip)} />
      </Card>
    </ReactCardFlip>

  );
}
