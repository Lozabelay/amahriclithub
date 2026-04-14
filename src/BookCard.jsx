function BookCard(props) {
  // Translate categories to Amharic/English
  const categoryNames = {
    poem: "ግጥም / Poem",
    fiction: "ልቦልድ / Fiction",
    bible: "መጽሐፍ ቅዱስ / Bible",
    other: "ሌላ / Other"
  };

  return (
    <div className="book-card">
      <img src={props.image} alt={props.title} />
      <span className="category">{categoryNames[props.category]}</span>
      <h3>{props.title}</h3>
      <p className="author">by {props.author}</p>
      <button className="read-btn">አንብብ ነፃ | Read Free</button>
    </div>
  );
}

export default BookCard;