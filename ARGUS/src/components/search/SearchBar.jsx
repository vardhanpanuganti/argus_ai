import { useState } from "react";
import "./SearchBar.css";
import { Search, Sparkles } from "lucide-react";

export default function SearchBar({ onSearch }) {

  const [query, setQuery] = useState("");

  const handleSearch = () => {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) return;

  onSearch(trimmedQuery);

  setQuery("");
};

  return (
    <div className="search-wrapper">

      <div className="search-bar">

        <div className="search-left">

          <Search size={20} />

          <input
            type="text"
            placeholder="Where do you want to go?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

        </div>

        <button
          className="ai-button"
          onClick={handleSearch}
        >
          <Sparkles size={18} />
          AI Search
        </button>

      </div>

    </div>
  );
}