function BookCard(props) {
  return (
    <div className="book-card">
      <img src={props.image} alt={props.title} />
      <span className="category">{props.category}</span>
      <h3>{props.title}</h3>
      <p className="author">{props.author}</p>
      <button className="read-btn">አንብብ ነፃ</button>
    </div>
  );
}

export default BookCard;