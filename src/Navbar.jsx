function Navbar({ activeCategory, onCategoryChange }) {
  // Our category options
  const categories = [
    { key: "all", label: "ሁሉም / All" },
    { key: "poem", label: "ግጥሞች / Poems" },
    { key: "fiction", label: "ልቦልድ / Fiction" },
    { key: "bible", label: "መጽሐፍ ቅዱስ / Bible" },
    { key: "other", label: "ሌሎች / Others" }
  ];

  return (
    <nav>
      {categories.map((cat) => (
        <button 
          key={cat.key} 
          onClick={() => onCategoryChange(cat.key)}
          className={activeCategory === cat.key ? "active-btn" : ""}
        >
          {cat.label}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;