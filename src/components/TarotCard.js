import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";

function TarotCard({ card }) {
	const [displayImage, setDisplayImage] = useState(true);
	const [isFlipped, setIsFlipped] = useState(false);
	const handleClick = () => {
		setDisplayImage(!displayImage);
	};

	useEffect(() => {
		setIsFlipped(true);
	}, []);

	const cardWithFlip = (
		<ReactCardFlip
			isFlipped={isFlipped}
			flipSpeedFrontToBack={5}
			flipSpeedBackToFront={5}
		>
			<div>
				<img
					src="/cardImages/back.jpg"
					height={525}
					width={300}
					alt="back of a card"
				/>
				{/* Button has to be present for flipping to work */}
				<Button className="hide" onClick={() => setIsFlipped(true)}>
					Click
				</Button>
			</div>
			<div>
				<img
					src={`/cardImages/${card.name_short}.jpg`}
					alt={card.desc}
					height={525}
					width={300}
					className={
						card.reverse ? "reversed clickable" : "clickable"
					}
					onClick={handleClick}
				/>
			</div>
		</ReactCardFlip>
	);

	const meaning = card.reverse ? (
		<p>{card.meaning_rev}</p>
	) : (
		<p>{card.meaning_up}</p>
	);

	return (
		<Col>
			<h2>{card.name}</h2>
			{displayImage ? (
				cardWithFlip
			) : (
				<p className="clickable" onClick={handleClick}>
					{card.desc}
				</p>
			)}
			{meaning}
		</Col>
	);
}

export default TarotCard;
