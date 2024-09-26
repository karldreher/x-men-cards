import Card from "@mui/material/Card";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function TradingCard(props: any) {
	const root = props.root;
	const [flip, setFlip] = useState(false);

	useEffect(() => {
		//always ensure that when image changes, we land on (front) card
		setFlip(false);
		//await component load and set rotation to 0, on image change
		const card = document.querySelector("div.react-card-flip") as HTMLElement;
		if (card) {
			card.style.transform = "rotate(0deg)";
		}
	}, [props.image]);

	return (
		<ReactCardFlip
			isFlipped={flip}
			flipDirection="horizontal"
			flipSpeedBackToFront={0.25}
			flipSpeedFrontToBack={0.4}
		>
			<Card sx={{ maxWidth: 345 }} variant="elevation">
				<Image
					priority={true}
					placeholder="blur"
					blurDataURL="/favicon.ico"
					alt=""
					width={300}
					height={415}
					src={`${root}/${props.image}-f.jpg`}
					onClick={async () => await setFlip(!flip)}
				/>
			</Card>
			<Card sx={{ maxWidth: 345 }} variant="elevation">
				<Image
					priority={true}
					placeholder="blur"
					blurDataURL="/favicon.ico"
					alt=""
					width={300}
					height={415}
					src={`${root}/${props.image}-b.jpg`}
					onClick={async () => await setFlip(!flip)}
				/>
			</Card>
		</ReactCardFlip>
	);
}
