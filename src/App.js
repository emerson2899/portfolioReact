
import {Button} from 'react-bootstrap';
import {ScrollParallax} from 'react-just-parallax';
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import {useSpringValue, animated} from '@react-spring/web';
import DowloadCurriculum from './components/curriculum/dowload';
import Tecnologias from './components/tecologias/Tecnologias';
import TextTitle from './components/title/TextTitle';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import './App.css';

function App() {
  const opacity = useSpringValue(0,{
    config:{
      mass: 2,
      friction: 5,
      tension: 80
    }
  })

  return (
    <div className="App">
      
    
   
  
  
      <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
     

      <ParallaxLayer offset={0} speed={2.5}>

        <div className='animation_layer parallax' id='artBack'> <TextTitle/> </div>
      
     

      </ParallaxLayer>
    </Parallax>
    
    </div>
  );
}

export default App;
