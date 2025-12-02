import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2 w-1/3">
      <input
        type="text"
        placeholder="Enter Search Keywords..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1 border border-white rounded-lg p-2 focus:outline-none"
      />

      <button
        type="submit"
        className="text-2xl text-gray-200 hover:text-yellow-500 transition"
      >
        <CiSearch />
      </button>
    </form>
  );
};

export default Search;
