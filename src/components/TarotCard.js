import { useState } from "react";
import { Col } from "react-bootstrap";
function TarotCard({ card }) {
	const [displayImage, setDisplayImage] = useState(true);
	const handleClick = () => {
		setDisplayImage(!displayImage);
	};

	return (
		<Col className={TarotCard}>
			<h2>{card.name}</h2>
			<div className="clickable" onClick={handleClick}>
				{displayImage ? (
					<img
						src={`/cardImages/${card.name_short}.jpg`}
						alt={card.desc}
						className={card.reverse ? "reversed" : ""}
					/>
				) : (
					<p>{card.desc}</p>
				)}
			</div>
			{card.reverse ? (
				<p>{card.meaning_rev}</p>
			) : (
				<p>{card.meaning_up}</p>
			)}
		</Col>
	);
}

export default TarotCard;
