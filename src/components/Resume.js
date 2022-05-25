import React from 'react';
import '../styles/aboutme.css';

function Resume() {
  return (
    <div class="header2" id="resume">
      <h2>Resume</h2>
        <a href="https://drive.google.com/file/d/1SOrfkLtxkbKgFq0HG-NNYfR4lbqa_uER/view?usp=sharing">
        <img src={require("./images/Resume.JPG")} class="img-fluid rounded-start" alt="PWA Text Editor"/>
        </a>
    </div>
  );
}

export default Resume;
