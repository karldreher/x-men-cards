import Button from '@mui/material/Button';

export default function RotateCard() {
  function rotate() {
    const card = document.querySelector('div.react-card-flip') as HTMLElement
    if (card) {
      card.style.transitionDuration = '.7s';
      if (card.style.transform === 'rotate(90deg)') {
        card.style.transform = ''
      }
      else {
        card.style.transform = 'rotate(90deg)';
      }
    }
  }
  return (

    <Button variant="outlined" onClick={rotate}>Rotate</Button>


  );
}
