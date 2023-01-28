import React, { useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const handleSearch = async () => {
    isLoading(true);
    try {
      const res = await fetch(
        `http://hn.algolia.com/api/v1/search?query=${searchTerm}&page=${page}`
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
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            isLoading ? (
              <LoadingSpinner />
            ) : (
              <SearchResults articles={articles} />
            )
          }
        />
        <Route path=":endpointTerm" />
      </Routes>
      {/* <Posts searchTerm={searchTerm} /> */}
      <SearchForm
        isLoading={(e) => setIsLoading(e)}
        handleSearch={handleSearch}
        handleInput={handleInput}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;
