import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/header.css';

function Header() {
  return (
    <div>
      <div id="header">
        <img src={require("./images/IMG_1446.jpg")} alt="Photo of Me" class="imagemain"/>
          <h1>Chance Allen Supcoe</h1>
          <p>Web Development</p>
      </div>
    </div>
  );
}

export default Header;
