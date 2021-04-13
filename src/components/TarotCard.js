import { Col } from "react-bootstrap";

function TarotCard({ card }) {
	const imgSource = ``;
	return (
		<Col className={TarotCard}>
			<h2>{card.name}</h2>
			<img src={imgSource} />
		</Col>
	);
}

export default TarotCard;
