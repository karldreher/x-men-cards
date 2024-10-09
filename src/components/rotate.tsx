import Button from '@mui/material/Button';

export default function RotateCard() {
  function rotate() {
    const card = document.querySelector('div.react-card-flip') as HTMLElement
    if (card) {
      card.style.transitionDuration = '.6s';
      if (card.style.transform === 'rotate(90deg)') {
        card.style.transform = 'rotate(0deg)';
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
