import { useRouter } from 'next/router'
import { Button } from '@mui/material';

type NavButtonProps = {
    /**
     * The direction of the button, for the label.
     */
    direction: string
    /**
     * The number of zeros to pad the image number with.
     */
    lpad: number
    disabled: boolean
}

function NavButton(props: NavButtonProps) {
    const router = useRouter()
    const splitPath = router.asPath.split('/')
    const set = splitPath[splitPath.length - 2]
    const image = splitPath[splitPath.length - 1]
    // TODO If next/prev is in omit list, choose next/prev again
    const prevImage = (String(Number(image) - 1)).padStart(props.lpad, "0")
    const nextImage = (String(Number(image) + 1)).padStart(props.lpad, "0")
    const cardIndex = props.direction === "next" ? nextImage : prevImage
    // Assemble the link target, based on the direction.
    const linkTarget = `/cards/${set}/${cardIndex}`
    // Handle the button click event.
    const handleClick = () => {
        router.push(linkTarget)
    }
    if (props.disabled) {
        return (
            <Button disabled>{props.direction}</Button>
        )
    }
    return (
        <Button onClick={handleClick}>{props.direction}</Button>
    )
}

export default NavButton
