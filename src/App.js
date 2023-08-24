import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Steve Jobs',
        bio: "Cofondateur emblématique d'Apple, Steve Jobs a révolutionné la technologie avec des produits tels que l'iPhone et l'iPad. Sa vision créative et son design innovant ont laissé une empreinte durable sur l'industrie.",
        imgSrc: 'https://appliedjung.com/wp-content/uploads/2011/12/steve-jobs1.jpg',
        profession: 'Créateur - Visionnaire'
      },
      show: false,
      timeSinceMount: 0
    };
  }

// Calcul du temps depuis le montage
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeSinceMount } = this.state;

// Carte Profil
    return (
      <div className="App">
        <Card className="m-auto border-secondary" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imgSrc} alt="Person" />
          <Card.Title className='m-3 display-4'>{fullName}</Card.Title>
            {show && (
            <Card.Body>
              <Card.Text>{bio}</Card.Text>
              <Card.Title>{profession}</Card.Title>
            </Card.Body>
            )}
          <Button variant="secondary" onClick={() => this.setState({ show: !show })}>
            {show ? 'Masquer le profil' : 'Afficher le profil'}
          </Button>
        </Card>
        <p>Temps écoulé depuis le montage : {timeSinceMount} secondes</p>
      </div>
    );
  }
}

export default App;
