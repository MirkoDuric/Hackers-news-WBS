import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchResults({ articles }) {
  return (
    <ol>
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
    </ol>
  );
}
