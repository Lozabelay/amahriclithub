function BookReader({ book, onClose }) {
  // If there is no book, don't show anything
  if (!book) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>✕</button>
        
        {/* Book Info */}
        <img src={book.image} alt={book.title} className="modal-img" />
        <h2>{book.title}</h2>
        <p className="modal-author">by {book.author}</p>
        
        {/* Fake Reading Area */}
        <div className="reading-area">
          <p>ይህ የመጽሐፍ ስርዓተ ንባብ ቦታ ነው።</p>
          <p>(This is where the book text will appear. For the front-end demo, we are just showing the UI!)</p>
        </div>

        <button className="modal-read-btn">ሙሉውን ያንቡቡ | Read Full Book</button>
      </div>
    </div>
  );
}

export default BookReader;