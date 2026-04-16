import { useState } from "react"; // <-- NEW: Import the switch tool!
import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import BookCard from "./BookCard";
import Landing from "./Landing"; // <-- NEW: Import landing page
import BookReader from "./BookReader"; // <-- NEW: Import the book reader modal

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

// ... keep your imports and books data exactly the same at the top ...

function App() {
  // Switches
  const [showLanding, setShowLanding] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // NEW: Which book is being read? (starts as null)
  const [selectedBook, setSelectedBook] = useState(null);

  if (showLanding) {
    return <Landing onStarted={() => setShowLanding(false)} />;
  }

  const booksToShow = books.filter((book) => {
    const matchesCategory = activeCategory === "all" || book.category === activeCategory;
    const matchesSearch = 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="main-app">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <Navbar 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      
      <main>
        {booksToShow.map((book) => (
          <BookCard
            key={book.id}
            book={book}               // NEW: Pass the whole book object
            onRead={setSelectedBook}  // NEW: Pass the function to open modal
          />
        ))}
      </main>

      {/* NEW: The Modal */}
      <BookReader 
        book={selectedBook} 
        onClose={() => setSelectedBook(null)} 
      />
    </div>
  );
}

export default App;