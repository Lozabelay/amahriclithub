function Header({ searchQuery, onSearchChange }) {
  return (
    <header>
      <h1>📚 Amharic Lit Hub</h1>
      <p>ነፃ የአማርኛ ሥነ ጽሑፍ | Free Ethiopian Literature</p>
      
      <div className="search-container">
        {/* Added the 🔍 emoji here */}
        <div style={{ position: "relative", width: "100%", maxWidth: "400px" }}>
          <span style={{ position: "absolute", left: "15px", top: "12px", color: "#d4af37", fontSize: "18px" }}>🔍</span>
          <input 
            type="text" 
            placeholder="Search / ፈልግ..." 
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;