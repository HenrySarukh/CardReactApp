import './card.css';

function Card({deleteCard, value}) {

  return (
    <div className="card">
      <div className="spanDiv">
        <button className="xButton" onClick={() => deleteCard(value)}>X</button>
      </div>
      <div className="pDiv">
        <p style={{margin: "0px"}}>{value}</p>
      </div>
    </div>
    );
  }

export default Card;