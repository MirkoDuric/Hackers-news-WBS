import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import SearchForm from "./components/SearchForm";
// import Post from "./views/Post";
import Posts from "./views/Posts";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SearchResults from "./components/SearchResults";
import { useNavigate } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("react");
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    handleSearch();
  }, [page]);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `http://hn.algolia.com/api/v1/search?query=${searchTerm}&page=${page}`
      );
      const data = await res.json();
      setArticles(data.hits);
      setIsLoading(false);
      if (searchTerm === "react") {
        navigate("");
      } else {
        navigate(searchTerm);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            isLoading ? (
              <LoadingSpinner />
            ) : (
              <SearchResults
                setPage={(e) => setPage(e)}
                page={page}
                articles={articles}
              />
            )
          }
        />
        <Route
          path=":endpointTerm"
          element={
            isLoading ? (
              <LoadingSpinner />
            ) : (
              <SearchResults
                setPage={(e) => setPage(e)}
                page={page}
                articles={articles}
              />
            )
          }
        />
      </Routes>
      <SearchForm
        handleSearch={handleSearch}
        handleInput={handleInput}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;
// {
//   isLoading ? <LoadingSpinner /> : <SearchResults articles={articles} />;
// }
