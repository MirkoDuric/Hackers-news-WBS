import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>Hacker News!</h1>
      </div>
      <div className="navbar">
        <button>new</button>|<button>past</button>|<button>comments</button>|
        <button>ask</button>|<button>show</button>|<button>jobs</button>|
        <button>submit</button>
      </div>
    </div>
  );
};

export default Header;
