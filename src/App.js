import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './index.css';



function App() {
  return (
    <div className="App">
    
      <Carousel fade variant='dark'>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: '100%', width: '100%' }}
            src={require('./images/ecoplay-07.jpg')}
            alt="Ecoplay Logo" />
          <Carousel.Caption>
            <h3>ECOPLAY</h3>
            <p>Business cards</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: '100%', width: '100%' }}
            src={require('./images/ecoplay-13.jpg')}
            alt="Ecoplay hat design" />
          <Carousel.Caption>
            <h3>ECOPLAY</h3>
            <p>Design promotional giveways</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: '100%', width: '100%' }}
            src={require('./images/ecoplay-03.jpg')}
            alt="Ecoplay Social Media" />
          <Carousel.Caption>
            <h3>ECOPLAY</h3>
            <p>Social media advertising</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: '100%', width: '100%' }}
            src={require('./images/mastercakes-03.jpg')}
            alt="Master Cakes Facade" />
          <Carousel.Caption>
            <h3>MASTER CAKES</h3>
            <p>Visual communication</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: '100%', width: '100%' }}
            src={require('./images/mastercakes-test.jpg')}
            alt="Master Cakes Webpage" />
          <Carousel.Caption>
            <h3>MASTER CAKES</h3>
            <p>Web design and social media management</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: '100%', width: '100%' }}
            src={require('./images/mastercakes-01.jpg')}
            alt="Master Cakes advertising" />
          <Carousel.Caption>
            <h3>MASTER CAKES</h3>
            <p>Product packaging design</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: '100%', width: '100%' }}
            src={require('./images/sonho-magico-07.jpeg')}
            alt="Sonho Magico Embalagens" />
          <Carousel.Caption>
            <h3>SONHO MÁGICO</h3>
            <p>Visual identity</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: '100%', width: '100%' }}
            src={require('./images/sonho-magico-12.png')}
            alt="Sonho Magico cups" />
          <Carousel.Caption>
            <h3>SONHO MÁGICO</h3>
            <p>Product packaging design</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: '100%', width: '100%' }}
            src={require('./images/sonho-magico-test.jpg')}
            alt="Sonho Magico cards" />
          <Carousel.Caption>
            <h3>SONHO MÁGICO</h3>
            <p>Business cards</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: '100%', width: '100%' }}
            src={require('./images/pedra-nobre-01.jpg')}
            alt="Pedra Nobre Marmoraria" />
          <Carousel.Caption>
            <h3>PEDRA NOBRE</h3>
            <p>Visual identity</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: '100%', width: '100%' }}
            src={require('./images/pedra-nobre-07.jpg')}
            alt="Pedra Nobre" />
          <Carousel.Caption>
            <h3>PEDRA NOBRE</h3>
            <p>Design promotional giveways</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: '100%', width: '100%' }}
            src={require('./images/pedra-nobre-10.jpg')}
            alt="Pedra Nobre Vehicles" />
          <Carousel.Caption>
            <h3>PEDRA NOBRE</h3>
            <p>Custom fleet graphics & Wraps</p>
          </Carousel.Caption>

        </Carousel.Item>
      </Carousel>

    </div>
  );
}

export default App;
