import React,{useEffect} from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
import Fade from 'react-reveal/Fade';


const ScrollLink = Scroll.ScrollLink;



export const NavBar=() => {
  const [scrolled,setScrolled]=React.useState(false);
const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
    
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
let navbarClasses=['navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }

   return (
    <Fade left duration={1000} delay={1000} distance="30px">
    <header className={navbarClasses.join(" ")}>

        <div className="logo">
         {/* your logo */}
         </div>
         <div>
            <div id="nav">
            <li><Link to='about'>About</Link></li>
            <li><Link to='Randomizer'>Randomizer</Link></li>
            <li><Link to='Tierlist'>Tierlist</Link></li>
            <li><Link to='ItemBuilder'>Item Builder</Link></li>
            </div>
        </div>
    </header>
    </Fade>
    
   )
};
