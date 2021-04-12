import React, { useState } from "react";
import { Container } from "react-bootstrap";
import TarotCard from "./TarotCard";

const cards = require("../card_data.json");
const deckSize = 78;

function Main() {
	const [inputNumber, setInputNumber] = useState(0);
	const [cardSpread, setCardSpread] = useState([]);

	const handleSubmit = event => {
		event.preventDefault();
		pickCards();
	};

	const handleChange = event => {
		setInputNumber(event.target.value);
	};

	const pickCards = () => {
		const pickedIndices = [];
		while (pickedIndices.length < inputNumber) {
			const pickedIndex = Math.floor(Math.random() * deckSize);
			if (!(pickedIndex in pickedIndices)) {
				pickedIndices.push(pickedIndex);
			}
		}
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
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input
						type="number"
						value={inputNumber}
						onChange={handleChange}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
			<div>
				{cardSpread.map(card => {
					return <TarotCard card={card} />;
				})}
			</div>
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
