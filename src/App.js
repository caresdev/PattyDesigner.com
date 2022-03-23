import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'



function App() {
  return (
    <div className="App">
      <Carousel fade variant='dark'>
        <Carousel.Item>
          <img
            className="d-block"
            style={{height: '100%', width:'100%'}}
            src={require('./images/ecoplay-07.jpg')}
            alt="Ecoplay Logo" />
          <Carousel.Caption>
            <h3>Ecoplay</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{height: '100%', width:'100%'}}
            src={require('./images/ecoplay-13.jpg')}
            alt="Ecoplay hat design" />
          <Carousel.Caption>
            <h3>Ecoplay</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{height: '100%', width:'100%'}}
            src={require('./images/ecoplay-03.jpg')}
            alt="Ecoplay Social Media" />
          <Carousel.Caption>
            <h3>Ecoplay</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{height: '100%', width:'100%'}}
            src={require('./images/mastercakes-03.jpg')}
            alt="Master Cakes Facade" />
          <Carousel.Caption>
            <h3>Master Cakes</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{height: '100%', width:'100%'}}
            src={require('./images/mastercakes-06.jpg')}
            alt="Master Cakes Webpage" />
          <Carousel.Caption>
            <h3>Master Cakes</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{height: '100%', width:'100%'}}
            src={require('./images/mastercakes-01.jpg')}
            alt="Master Cakes advertising"/>
          <Carousel.Caption>
            <h3>Master Cakes</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{height: '100%', width:'100%'}}
            src={require('./images/sonho-magico-07.jpeg')}
            alt="Sonho Magico Embalagens" />
          <Carousel.Caption>
            <h3>Sonho Mágico</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{height: '100%', width:'100%'}}
            src={require('./images/sonho-magico-12.png')}
            alt="Sonho Magico cups" />
          <Carousel.Caption>
            <h3>Sonho Mágico</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{height: '100%', width:'100%'}}
            src={require('./images/sonho-magico-06.png')}
            alt="Sonho Magico cards" />
          <Carousel.Caption>
            <h3>Sonho Mágico</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{height: '100%', width:'100%'}}
            src={require('./images/pedra-nobre-01.jpg')}
            alt="Pedra Nobre Marmoraria"/>
          <Carousel.Caption>
            <h3>Pedra Nobre Marmoraria</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{height: '100%', width:'100%'}}
            src={require('./images/pedra-nobre-07.jpg')}
            alt="Pedra Nobre"/>
          <Carousel.Caption>
            <h3>Pedra Nobre</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block"
            style={{height: '100%', width:'100%'}}
            src={require('./images/pedra-nobre-10.jpg')}
            alt="Pedra Nobre Vehicles"/>
          <Carousel.Caption>
            <h3>Pedra Nobre Marmoraria</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>

        </Carousel.Item>
      </Carousel>

    </div>
  );
}

export default App;
