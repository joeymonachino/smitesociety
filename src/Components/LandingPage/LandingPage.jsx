import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './LandingPageStyle.css';
import {Link} from 'react-router-dom';



const LandingPage = () => {
    const {LandingPageText, LandingPageText2, LandingPageButton} = LandingPage;
    return (
        <div>
        <section id="LandingPage">
            <Container>
                <Fade left duration={1000} delay={500} distance="30px">
                <div className='LandingPageText'>
                    {LandingPageText || 'Welcome To'}{' '}
                    <span className='LandingPageText2'>{LandingPageText2 || 'Smite Society'}</span>
                </div>
                    <span className="LandingPageButton">
                            
                           <Link to="/About"> 
                                {LandingPageButton || 'Enter'}
                          </Link> 
                           
                            
                            
                    </span>
                </Fade>
            </Container>
        </section>
        </div>
    );
};

export default LandingPage;