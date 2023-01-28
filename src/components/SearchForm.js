import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchForm({ handleSearch, handleInput, searchTerm }) {
  const navigate = useNavigate();

  return (
    <div>
      <input
        type="text"
        placeholder="Search for articles"
        value={searchTerm}
        onChange={handleInput}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={() => navigate(-1)}>Go back to homepage</button>
    </div>
  );
}

export default SearchForm;

// import React, { useState } from "react";

// const SearchForm = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search for articles"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={(() => onSearch(searchTerm), console.log(searchTerm))}>
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchForm;

// const handleSearch = async () => {
//   isLoading(true);
//   try {
//     const res = await fetch(
//       `http://hn.algolia.com/api/v1/search?query=${searchTerm}`
//     );
//     const data = await res.json();
//     setArticles(data.hits);
//     navigate(searchTerm);
//     isLoading(false);
//   } catch (err) {
//     console.error(err);
//   }
// };
