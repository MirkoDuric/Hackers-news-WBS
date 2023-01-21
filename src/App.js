import React, { useState } from "react";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import SearchForm from "./components/SearchForm";
import Post from "./views/Post";
import Posts from "./views/Posts";



function App() {

  const [isLoading, setIsLoading] = useState(false);



  return(
  
  <div>
    <Header />
    <SearchForm />
    {isLoading ? <LoadingSpinner /> : <Posts />}
    <LoadingSpinner />
  </div>
  )
}

export default App;
