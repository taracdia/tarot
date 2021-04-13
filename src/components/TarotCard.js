import { Col } from "react-bootstrap";
function TarotCard({ card }) {
	return (
		<Col className={TarotCard}>
			<h2>{card.name}</h2>
			<div>
				<img
					src={`/cardImages/${card.name_short}.jpg`}
					alt={card.desc}
				/>
			</div>
		</Col>
	);
}

export default TarotCard;
