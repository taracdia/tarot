import { Col } from "react-bootstrap";

function TarotCard({ card }) {
	const imgSource = `../cardImages/ar00.jpg`;
	return (
		<Col className={TarotCard}>
			<h2>{card.name}</h2>
			<img src={imgSource} alt={card.desc} />
		</Col>
	);
}

export default TarotCard;
