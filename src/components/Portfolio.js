import React from 'react';
import '../styles/portfolio.css';

function Portfolio () {
    return (
      <div>
      <section id="portfolio">
          <article class="header2">
              <h2>Portfolio</h2>


              <div class="card mb-3" id="cardBody">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <a href="https://agile-meadow-18370.herokuapp.com/">
                          <img src={require("./images/PWA_text_editor.JPG")} class="img-fluid rounded-start" alt="PWA Text Editor"/>
                      </a>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Progressive Web Application Text Editor</h5>
                        <p class="card-text">A single page text editor featuring a number of data persistence techniques as redundencies that is able to function seemlessly offline. This application was completed using starter code provided by Georgia Techs Coding Boot Camp.</p>
                      </div>
                    </div>
                  </div>
              </div>


              <div class="card mb-3" id="cardBody">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <a href="https://kashane1.github.io/alpha-1-prime/">
                      <img src={require("./images/Coding BFF IMG.JPG")} class="img-fluid rounded-start" alt="Coding BFF"/>
                      </a>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Coding BFF</h5>
                        <p class="card-text">Coding BFF is an application that addresses the need to minimize the amount of browser tabs open, organizing our work and our research into one location, provide quick links and resources to ideas we already learned, and bring all needed information into bite size pieces on one page. Sometimes its not that we all can't find the right answers, but it's that there are too many answers out there for us to look at. Our application helps individuals focus their workload in order to complete their overall tasks more efficiently.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card mb-3" id="cardBody">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <a href="https://github.com/ChanceSupcoe/E-Commerce_Back_End">
                      <img src={require("./images/E-Commerce-Pic.JPG")} class="img-fluid rounded-start" alt="E-Commerce"/>
                      </a>
                      </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">E-Commerce Back End</h5>
                        <p class="card-text">The back end for an e-commerce site the enables the user to edit the companies inventory was created using starter code. Due to the lack of front-end for the application it is displayed using Insomnia.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card mb-3" id="cardBody">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <a href="https://github.com/ChanceSupcoe/README-Generator">
                      <img src={require("./images/README-Snip.JPG")} class="img-fluid rounded-start" alt="README-Generator"/>
                      </a>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">README Generator</h5>
                        <p class="card-text">This project was developed to help facilitate the creation of a professional README file using command-line prompts.
                          The command-line prompts direct the creation of a README file that contains a description of the project, a table of contents, installation instructions, usage instructions and examples, credits to other contributors or tutorials, licenses, tests, and how to reach the creator for additional questions.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card mb-3" id="cardBody">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <a href="https://chancesupcoe.github.io/Password_Generator/">
                      <img src={require("./images/Password Generator IMG.JPG")} class="img-fluid rounded-start" alt="Password Generator"/>
                      </a>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Password Generator</h5>
                        <p class="card-text">An application that enables the user to create a randomly generated password controlled by checkboxes for specific inputs allowed or neglected.</p>
                      </div>
                    </div>
                  </div>
                </div>

          </article>
      </section>
  </div>


    );
}


export default Portfolio;
