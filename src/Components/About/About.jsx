import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import {NavBar} from '../NavBar/NavBar';


const About = () => {
    const {intro, randomizer, tierlist, itembuilder, gods, items} = About;
    return (
        <section id="about">
          <NavBar />
      <Container>
        <Fade left duration={1000} delay={1000} distance="30px">
        <h1 className='header'>About Smite Society</h1>
        </Fade>
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
          </Col>
          <Col md={6} sm={12}>
            <Fade left duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {intro ||
                    'Smite Society is a personal project page, devoted to an online video game called Smite. Smite is a MOBA (Massive/Multiplayer Online Battle Arena. The playable characters are based on mythological pantheons (ex. Zeus, Ra), with various different playable game modes.'}
                </p>
                <p className="about-wrapper__info-text">
                  {intro ||
                    'This page is intended to either help you get better at the game and improve, or add some flavor/fun to your games with your friends with some random god/item builds.'}
                </p>
                <p className="about-wrapper__info-text">
                  {randomizer || 
                   'The Randomizer is intended to give you a memorable and laugh-inducing game with friends or yourself. It will provide you with a number of randomized gods and builds that you can attempt to win with. These are NOT meant to be taken seriously, they are completely randomized.'}
                </p>
                <p className="about-wrapper__info-text">
                  {gods || 
                   'The god section is relatively straightforward. This is a list of the playable gods in the game of Smite. As of right now there is no functionality, but coming soon will be some interactivity to learn more about the gods, and see which ones may fit your playstyle or seem interesting for you to check out.'}
                </p>
                <p className="about-wrapper__info-text">
                  {tierlist || 
                   'The tierlist maker will allow you to drag and drop the gods into ranked tiers. Eventually you will be able to save this and send it to your friends, either showing them who your favorites are OR just a ranked tierlist of, in your opinion, which gods are strongest.'}
                </p>
                <p className="about-wrapper__info-text">
                  {itembuilder || 
                   'The tierlist maker will allow you to drag and drop the gods into ranked tiers. Eventually you will be able to save this and send it to your friends, either showing them who your favorites are OR just a ranked tierlist of, in your opinion, which gods are strongest.'}
                </p>
                <p className="about-wrapper__info-text">
                  {items || 
                   'The tierlist maker will allow you to drag and drop the gods into ranked tiers. Eventually you will be able to save this and send it to your friends, either showing them who your favorites are OR just a ranked tierlist of, in your opinion, which gods are strongest.'}
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
    )

}

export default About;