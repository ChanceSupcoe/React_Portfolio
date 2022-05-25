import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';

const styles = {
  body : {
    margin:0,
    backgroundColor:'#15202b',
  }
}

function App() {
  return (
    <html>
    <head>
        <title>Chance Portfolio</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        <link rel="stylesheet" href="assets/style.css"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </head>

    <body style = {styles.body}>
      <Navbar />
      <Header />
      <AboutMe />
      <Portfolio />
      <ContactMe />
      <Card />
    </body>
  </html>

  );
}

export default App;
