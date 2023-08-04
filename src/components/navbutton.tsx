import { useRouter } from 'next/router'
import { Button } from '@mui/material';

function NavButton(props:any) {
    const router = useRouter()
    const splitPath = router.asPath.split('/')
    const set = splitPath[splitPath.length - 2]
    const image = splitPath[splitPath.length - 1]
    const prevImage = Number(image) - 1
    const nextImage = Number(image) + 1
    const href = `/cards/${set}/${nextImage}`

    const handleClick = (e:any) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <Button onClick={handleClick}>{props.direction}</Button>

    )
}

export default NavButton
