import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import BookCard from "./BookCard";

const books = [
  {
    id: 1,
    title: "የፍቅር ግጥሞች",
    author: "ጸጋዬ ገብረ መድህን",
    price: 250,
    category: "poem",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400"
  },
  {
    id: 2,
    title: "ፍቅር እስከ ሞት",
    author: "ሀዲስ አለማየሁ",
    price: 350,
    category: "poem",
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400"
  },
  {
    id: 3,
    title: "ፍቅር እስከ ሞት",
    author: "ሀዲስ አለማየሁ",
    price: 450,
    category: "fiction",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400"
  },
  {
    id: 4,
    title: "ስምንተኛ ሰው",
    author: "ዳናኛቸው ወርቁ",
    price: 300,
    category: "fiction",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400"
  },
  {
    id: 5,
    title: "የኢትዮጵያ ታሪክ",
    author: "መርስዔ ኃዘን ወልደ ቂርቆስ",
    price: 500,
    category: "fiction",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400"
  },
  {
    id: 6,
    title: "መጽሐፍ ቅዱስ (Amharic Bible)",
    author: "ብሉይ ኪዳን እና አዲስ ኪዳን",
    price: 600,
    category: "bible",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400"
  },
  {
    id: 7,
    title: "መጽሐፍ ቅዱስ (KJV Amharic)",
    author: "ንባብ ቤተክርስቲያን",
    price: 750,
    category: "bible",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400"
  },
  {
    id: 8,
    title: "ራስ ገዝ ማሻሻያ",
    author: "ገብረ ኪዳን ተክሉ",
    price: 200,
    category: "other",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400"
  },
  {
    id: 9,
    title: "የኢትዮጵያ ምስሎች",
    author: "አበበ ማሞ",
    price: 400,
    category: "other",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400"
  }
];

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            category={book.category}
            image={book.image}
          />
        ))}
      </main>
    </div>
  );
}

export default App;