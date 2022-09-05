import { useState } from "react";
import Card from "../card/card.jsx";
import "./index.css";

function Program() {
  const [cardList, setCards] = useState([]);

  function addCard(e) {
    let value = Math.floor(Math.random() * 1000);
    setCards((arr) => [...arr, value]);
  }

  function deleteAllCards(e) {
    setCards([]);
  }

  const deleteCard = (value) => {
    var index = cardList.indexOf(value);
    const arr = [...cardList];
    arr.splice(index, 1);
    setCards(arr);
  };

  function sortCards(e) {
    setCards((arr) => [...arr].sort((a,b)=> a - b));
  }

  return (
    <div className="grid-container">
      <div className="grid-button">
        <button onClick={addCard}>Add Card</button>
        <button onClick={sortCards}>Sort Card</button>
        <button onClick={deleteAllCards}>Delete Card</button>
      </div>
      <div className="grid-item-intructions">
        <p>React App for adding and soring cards, Designed by Solicy.</p>
        <p>Thanks to FE developer Tigran Jaghatspanyan and TL Sergey Ghazaryan.</p>
      </div>
      <div className="grid-components">
        {cardList.map((value) => (
          <Card deleteCard={deleteCard} value={value} />
        ))}
      </div>
      <div style={{ paddingLeft: "10px",boxSizing: "border-box" }}>Here can be your advertisement</div>
    </div>
  );
}

export default Program;
