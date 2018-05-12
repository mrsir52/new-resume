import React, {Component} from 'react';

import './css/style.css';

import {Button, Card, CardBody, CardImage, CardTitle, CardText, View,} from 'mdbreact';
import Me from './img/face.jpg'
import Html5 from './img/html5.svg'
import Css3 from './img/css3.svg'
import Mongo from './img/mongodb.svg'
import Nodejs from './img/nodejs-original.svg'
import Npm from './img/npm.svg'
import Reactimg from './img/react.svg'
import jsimg from './img/javascript-original.svg'
import bstrap from './img/bootstrap-plain.svg'
import github from './img/github.svg'
import graphql from './img/graphql.svg'
import bit from './img/bitcoin-copy.png'
import date from './img/Timer.png'
import food from './img/food.jpg'
import ecomm from './img/ecomm.png'
import swag from './img/swagger.png'
import seconds from './img/seconds.png'


export default class Main extends React.Component {
    render() {
        return (
            <div>
                {/* Landing page section */}
                <section id="top-section">
                    {/*Background Image */}

                    <div className="view intro">
                        <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
                            <div className="intro-text mx-5 fadeIn">
                                <h1 className="display-2">
                                    <strong>Manny Torres</strong>
                                </h1>
                                <p className="display-4">
                                    Full Stack Web Developer
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*About me section */}
                <div className="container aboutme-div">
                    <div className="row">

                        <div className="col-md-6 col-mb-4">
                            <div className="top-about">
                                <img className="img1 headshot" src={Me} alt="Picture of Manny"/>

                            </div>
                            <br/>

                            {/*<h2>Skills that I am learning</h2>*/}
                            <div className="icon-div">
                                <img className="icon" src={Html5} width={50} height={50} alt="html5 logo"/>
                                <img className="icon" src={Css3} width={50} height={50} alt="css3 logo"/>
                                <img className="icon" src={jsimg} width={50} height={50} alt="github logo"/>
                                <img className="icon" src={Reactimg} width={50} height={50} alt="github logo"/>
                                <img className="icon" src={Mongo} width={50} height={50} alt="mongodb logo"/>
                                <img className="icon" src={graphql} width={50} height={50} alt="mysql logo"/>
                                <img className="icon" src={Nodejs} width={50} height={50} alt="node.js logo"/>
                                <img className="icon" src={Npm} width={50} height={50} alt="npm logo"/>
                                <img className="icon" src={github} width={50} height={50} alt="react logo"/>
                                <img className="icon" src={bstrap} width={50} height={50} alt="react logo"/>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <h2>About Me</h2>
                            <h6 className="about-me-p">
                                <br/>

                                I recently completed training as a Full Stack Web Developer and I am looking for my
                                first position as a Web Developer/Software Engineer. Although my most recent positions
                                have been in sales I have previous experience in the tech industry on the hardware side.
                                I was part of a tier2 networking support team for many years and was able to
                                troubleshoot and configure local area networks for small businesses.

                                In today’s business environment there is a need to collaborate with multiple departments
                                in order to grow and succeed. I believe with my new skills and previous technical
                                experience combined with my ability to communicate effectively I will help me be an
                                asset to any team in need of a well-rounded individual.
                            </h6>
                        </div>
                    </div>
                </div>
                {/*End of About me section */}
                <div className="container projects-section">
                    <h2 className="m-4">Projects</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4">
                            <img src={seconds} alt="food" className="img-fluid z-depth-1-half"/>
                            <CardTitle className="text-center mt-3 ">
                                Potluck Planner
                            </CardTitle>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <img src={bit} alt="food" className="img-fluid z-depth-1-half"/>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <img src={swag} alt="food" className="img-fluid z-depth-1-half"/>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4">
                            <img src={ecomm} alt="food" className="img-fluid z-depth-1-half"/>
                            <h4 className="text-center mt-3 font-weight-bold">
                                Potluck Planner
                            </h4>
                            <CardBody>
                                <p className="grey-text">
                                    I wanted to try firebase out. This uses the build in firebase authentication
                                </p>
                            </CardBody>

                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <img src={food} alt="food" className="img-fluid z-depth-1-half"/>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <img src={ecomm} alt="food" className="img-fluid z-depth-1-half"/>
                        </div>

                    </div>

                </div>
                <section className="container">
                    <div className="proj-header">

                        <h2>Sample Projects</h2>

                        <section>
                            <div className="row">

                                <div className="col-md-4">
                                    <Card>

                                        <img src={ecomm} alt="food" className="img-fluid"/>
                                        <CardBody>
                                            <CardTitle>Simple React Counter</CardTitle>
                                            <CardText>This was one of the first things that I did with React. It is just
                                                a simple
                                                counter that uses state, props, and the buit in object new
                                                Date</CardText>
                                            <Button size='sm' color="black"
                                                    href="https://happy-lamarr-e66402.netlify.com/">View Site</Button>
                                            <Button size='sm' color="black" href="https://github.com/mrsir52/timer">Github
                                                Link</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col-md-4">
                                    <Card className="card">
                                        <CardImage className="img-fluid" src={bit}/>
                                        <CardBody>
                                            <CardTitle>Bitcoin Counter</CardTitle>
                                            <CardText>This was my first React projcet that used props to calculate the
                                                prices</CardText>
                                            <Button size='sm' color="black"
                                                    href="https://jolly-snyder-ff1ae6.netlify.com">View Site</Button>
                                            <Button size='sm' color="black"
                                                    href="https://github.com/mrsir52/Bitcoin-app">Github Link</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col-md-4">
                                    <Card className="card">
                                        <CardImage className="img-fluid" src={food}/>
                                        <CardBody>
                                            <CardTitle>Firebase Potluck App</CardTitle>
                                            <CardText>Full Stack App using React and Firebase</CardText>
                                            <Button size='sm' color="black"
                                                    href="https://jolly-snyder-ff1ae6.netlify.com">View Site</Button>
                                            <Button size='sm' color="black"
                                                    href="https://github.com/mrsir52/Bitcoin-app">Github Link</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <Card>
                                    <CardImage className="img-fluid" src={swag}/>
                                    <CardBody>
                                        <CardTitle>Intro to REST API's</CardTitle>
                                        <CardText>React Hapi Server and swagger - using swagger for REST
                                            endpoints</CardText>
                                        <Button size='sm' color="black" href="https://github.com/mrsir52/Bitcoin-app">Github
                                            Link</Button>
                                    </CardBody>
                                </Card>
                            </div>
                        </section>

                        <section>


                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="card">
                                            <div className="view overlay">
                                                <img
                                                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(72).jpg"
                                                    className="card-img-top" alt=""/>
                                                <a href="#">
                                                    <div className="mask rgba-white-slight"></div>
                                                </a>

                                            </div>
                                            <div className="card-body">

                                                <h4 className="card-title">Card title</h4>

                                                <p className="card-text">Some quick example text to build on the card
                                                    title
                                                    and make up the bulk of the card's content.</p>
                                                <a href="#!" className="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="card">
                                            <div className="view overlay">
                                                <img
                                                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(74).jpg"
                                                    className="card-img-top" alt=""/>
                                                <a href="#">
                                                    <div className="mask rgba-white-slight"></div>
                                                </a>
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Some quick example text to build on the card
                                                    title
                                                    and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <Card>
                                            <div className="view overlay">
                                                <img
                                                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(75).jpg"
                                                    className="card-img-top" alt=""/>
                                                <a href="#">
                                                    <div className="mask rgba-white-slight"></div>
                                                </a>
                                            </div>
                                            <CardBody>">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Some quick example text to build on the card
                                                    title
                                                    and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Button</a>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>

                            </div>


                        </section>
                        <div className="contact-me">
                            <h2>Connect with me on LinkedIn or view more of my code.</h2>
                            <a href="https://www.linkedin.com/in/manny-torres-ut/"><i
                                className="fab fa-linkedin icon-link"></i></a>
                            <a href="https://github.com/mrsir52"><i className="fab fa-github-square icon-link"></i></a>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
