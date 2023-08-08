import * as React from 'react';
import Button from '@mui/material/Button';

export default function RotateCard() {
  function rotateCard() {
    const card = document.querySelector('div.react-card-flip') as HTMLElement
    if (card) {
      card.style.transitionDuration = '1s';
      if (card.style.transform == 'rotate(90deg)') {
        card.style.transform = ''
      }
      else {
        card.style.transform = 'rotate(90deg)';
      }
    }
  }
  return (

    <Button variant="outlined" onClick={rotateCard}>Rotate</Button>


  );
}
