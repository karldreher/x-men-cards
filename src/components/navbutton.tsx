import { useRouter } from 'next/router'
import { Button } from '@mui/material';

function NavButton(props: any) {
    const router = useRouter()
    const splitPath = router.asPath.split('/')
    const set = splitPath[splitPath.length - 2]
    const image = splitPath[splitPath.length - 1]
    // TODO this is wrong, fix it later
    // component should not load (from slug page) if we are at the last image or beginning of set.
    const prevImage = (String(Number(image) - 1)).padStart(props.lpad, "0")
    const nextImage = (String(Number(image) + 1)).padStart(props.lpad, "0")
    if (props.direction == "next") {
        var href = `/cards/${set}/${nextImage}`
    }
    if (props.direction == "prev") {
        var href = `/cards/${set}/${prevImage}`
    }
    const handleClick = (e: any) => {
        e.preventDefault()
        router.push(href)
    }
    return (
        <Button onClick={handleClick}>{props.direction}</Button>
    )
}

export default NavButton
