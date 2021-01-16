import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import './projects.css';
import Randomizer from './Randomizer/Randomizer.js';
import Tierlist from './Tierlist/Tierlist';
import ItemBuilder from './ItemBuilder/ItemBuilder';
//import Gods from './Gods/Gods';
import {NavBar} from '../NavBar/NavBar';


export const RandomizerProject = () => {
    return (
        <div className='Projects'>
            <div className="projectsRandomizer">
                <section id="Randomizer">
                    <Container>
                        <div className="project-wrapper">
                        <NavBar />
                            <header>Randomizer</header>
                            <Fade  left duration={1000} delay={500} distance="30px">
                                <div className="project-wrapper__text">
                                    <h3 className="project-wrapper__text-title">{'Select How Many Random Builds to Produce'}</h3>
                                    <div>
                                        <p>
                                            <Randomizer />
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </Container>
                </section>
            </div>
            </div>
        )
                                            } 
                                             

export const TierlistProject = () => {
    return (
        <div className="projectsTierlist">
                <section id="Tierlist">
                    <Container>
                        <div className="project-wrapper">
                        <NavBar />
                            <header>Tierlist</header>
                            <Fade  left duration={1000} delay={500} distance="30px">
                                <div className="project-wrapper__text">
                                    <h3 className="project-wrapper__text-title"></h3>
                                    <div>
                                        <p>
                                            <Tierlist />
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </Container>
                </section>
            </div>
    )
                                            }

    
export const ItemBuilderProject = () => {
    return (
        <div className="projectsItemBuilder">
                <section id="ItemBuilder">
                    <Container>
                        <div className="project-wrapper">
                        <NavBar />
                            <header>Item Builder</header>
                            <Fade  left duration={1000} delay={500} distance="30px">
                                <div className="project-wrapper__text">
                                    <h3 className="project-wrapper__text-title"></h3>
                                    <div>
                                        <p>
                                            <ItemBuilder />
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </Container>
                </section>
            </div>
    )
}            
            

            




