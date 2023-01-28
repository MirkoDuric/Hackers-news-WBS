import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchForm({ isLoading }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const handleSearch = async () => {
    isLoading(true);
    try {
      const res = await fetch(
        `http://hn.algolia.com/api/v1/search?query=${searchTerm}`
      );
      const data = await res.json();
      setArticles(data.hits);
      navigate(searchTerm);
      isLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for articles"
        value={searchTerm}
        onChange={handleInput}
      />
      <button onClick={handleSearch}>Search</button>
      {articles.map((article) => (
        <li key={article.objectId}>
          <h4>{article.title}</h4>
          <p>
            <span className="subtext">
              {article.points} points by {article.author}
            </span>
          </p>
        </li>
      ))}
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
