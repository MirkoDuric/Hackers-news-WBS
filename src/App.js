import React, { useState } from "react";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import SearchForm from "./components/SearchForm";
// import Post from "./views/Post";
import Posts from "./views/Posts";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={isLoading ? <LoadingSpinner /> : <Posts />} />
        <Route path=":endpointTerm" />
      </Routes>
      <SearchForm isLoading={(e) => setIsLoading(e)} />
    </div>
  );
}

export default App;
