import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchResults({ articles, page, setPage }) {
  return (
    <div className="searchResults">
      <ol>
        {articles.length === 0 ? (
          <p>No Articles Found</p>
        ) : (
          articles.map((article) => (
            <li key={article.objectID}>
              <div className="tryangle-div">
                <span className="tryangle">&#9650;</span>
                <h4>{article.title}</h4>
              </div>

              <p>
                <span className="subtext">
                  {article.points} points by {article.author}
                </span>
              </p>
            </li>
          ))
        )}
      </ol>
      <br />
      <button onClick={() => setPage(Math.max(page - 1, 1))}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
