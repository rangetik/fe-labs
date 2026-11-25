function GoodsCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>Ціна: {props.price} грн</p>
    </div>
  );
}

export default GoodsCard;