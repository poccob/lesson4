import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Navigation from '../components/Navigation';

function AboutPage() {
  return (
    <div>
      <Navigation />
      <Jumbotron>
        <h2>Я смог это!</h2>
        <p>Молодец, я молодец!</p>
      </Jumbotron>
    </div>
  );
}

export default AboutPage;
