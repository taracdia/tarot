import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import TarotCard from "./TarotCard";

const cards = require("../card_data.json");
const deckSize = 78;

function Main() {
	const [inputNumber, setInputNumber] = useState(3);
	const [cardSpread, setCardSpread] = useState([]);

	const handleSubmit = event => {
		if (inputNumber < 1 || inputNumber > deckSize) {
			alert("Please enter a number between 1 and 78");
			return;
		}
		event.preventDefault();
		pickCards();
	};

	const handleChange = event => {
		setInputNumber(event.target.value);
	};

	const pickCards = () => {
		const pickedIndices = [];
		setCardSpread([]);
		while (pickedIndices.length < inputNumber) {
			const pickedIndex = Math.floor(Math.random() * deckSize);
			if (!pickedIndices.includes(pickedIndex)) {
				pickedIndices.push(pickedIndex);
			}
		}
		console.log(pickedIndices);
		const pickedCards = pickedIndices.map(num => {
			const pickedCard = cards[num];
			//Allow each card to be reversed or not
			pickedCard["reverse"] = Math.random() < 0.5;
			return pickedCard;
		});
		setCardSpread(pickedCards);
	};
	return (
		<Container>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formSpreadNumber">
							<Form.Label>Cards in Your Spread:</Form.Label>
							<Form.Control
								type="number"
								value={inputNumber}
								onChange={handleChange}
							/>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form.Group>
					</Form>
				</Col>
			</Row>
			<Row>
				{cardSpread.map(card => {
					return <TarotCard key={card.name_short} card={card} />;
				})}
			</Row>
			<footer>
				<p>
					Thanks to <a href="https://github.com/ekelen/">Ekelen</a>'s{" "}
					<a href="https://github.com/ekelen/tarot-api">Tarot API</a>
				</p>
			</footer>
		</Container>
	);
}

export default Main;
