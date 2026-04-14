import { useState } from "react"; // <-- NEW: Import the switch tool!
import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import BookCard from "./BookCard";
import Landing from "./Landing"; // <-- NEW: Import landing page

const books = [
  // ... keep your exact same 8 books here ...
  {
    id: 1,
    title: "የፍቅር ግጥሞች",
    author: "ጸጋዬ ገብረ መድህን",
    category: "poem",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400"
  },
  {
    id: 2,
    title: "ፍቅር እስከ ሞት",
    author: "ሀዲስ አለማየሁ",
    category: "poem",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400"
  },
  {
    id: 3,
    title: "ስምንተኛ ሰው",
    author: "ዳናኛቸው ወርቁ",
    category: "fiction",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400"
  },
  {
    id: 4,
    title: "የኢትዮጵያ ታሪክ",
    author: "መርስዔ ኃዘን ወልደ ቂርቆስ",
    category: "fiction",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400"
  },
  {
    id: 5,
    title: "መጽሐፍ ቅዱስ (Amharic Bible)",
    author: "ብሉይ ኪዳን እና አዲስ ኪዳን",
    category: "bible",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400"
  },
  {
    id: 6,
    title: "መጽሐፍ ቅዱስ (KJV Amharic)",
    author: "ንባብ ቤተክርስቲያን",
    category: "bible",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400"
  },
  {
    id: 7,
    title: "ራስ ገዝ ማሻሻያ",
    author: "ገብረ ኪዳን ተክሉ",
    category: "other",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400"
  },
  {
    id: 8,
    title: "የኢትዮጵያ ምስሎች",
    author: "አበበ ማሞ",
    category: "other",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400"
  }
];

function App() {
  // THE LIGHT SWITCH!
  // Starts as TRUE (Landing page shows)
  const [showLanding, setShowLanding] = useState(true);

  // If switch is ON, show Landing Page
  if (showLanding) {
    return <Landing onStarted={() => setShowLanding(false)} />;
  }

  // If switch is OFF, show Main Website
  return (
    // We wrap the main site in a div to give it a WHITE background
    <div className="main-app">
      <Header />
      <Navbar />
      <main>
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            image={book.image}
          />
        ))}
      </main>
    </div>
  );
}

export default App;