function BookCard({ book, onRead }) { // Notice we receive 'book' and 'onRead' now
  const categoryNames = {
    poem: "ግጥም / Poem",
    fiction: "ልቦልድ / Fiction",
    bible: "መጽሐፍ ቅዱስ / Bible",
    other: "ሌላ / Other"
  };

  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <span className="category">{categoryNames[book.category]}</span>
      <h3>{book.title}</h3>
      <p className="author">by {book.author}</p>
      
      {/* NEW: Add onClick to the button */}
      <button className="read-btn" onClick={() => onRead(book)}>
        አንብብ ነፃ | Read Free
      </button>
    </div>
  );
}

export default BookCard;