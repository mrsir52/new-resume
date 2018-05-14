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
import fe from './img/Front-end.png'
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

                        <div className="col-lg-12 col-md-12 mb-4">
                            <div className="">
                                <img className="img1 headshot" src={Me} alt="Picture of Manny"/>


                            </div>
                            <h2 className="mt-5 mb-2">About Me</h2>
                            <h6 className="about-me-p">
                                <br/>

                                {/*I recently completed training as a Full Stack Web Developer and I am looking for my*/}
                                {/*first position as a Web Developer/Software Engineer. */}

                                {/*Although my most recent positions*/}
                                {/*have been in sales I have previous experience in the tech industry on the hardware side.*/}
                                {/*I was part of a tier2 networking support team for many years and was able to*/}
                                {/*troubleshoot and configure local area networks for small businesses.*/}

                                In today’s business environment there is a need to collaborate with multiple departments
                                in order to grow and succeed. I believe with my recent training in web development and
                                previous technical
                                experience combined with my ability to communicate effectively I will be an
                                asset to any team in need of a well-rounded individual.
                            </h6>
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

                    </div>
                </div>
                {/*End of About me section */}
                <div className="container-fluid projects-section">
                    <h2 className="m-5">Projects</h2>
                    <div className="container">

                        {/*<div className="row">*/}
                        {/*<div className="col-lg-4 col-md-12 mb-4">*/}
                        {/*<img src={seconds} alt="food" className="img-fluid z-depth-1-half"/>*/}
                        {/*<CardTitle className="text-center mt-3 ">*/}
                        {/*Potluck Planner*/}
                        {/*</CardTitle>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-4 col-md-6 mb-4">*/}
                        {/*<img src={bit} alt="food" className="img-fluid z-depth-1-half"/>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-4 col-md-6 mb-4">*/}
                        {/*<img src={swag} alt="food" className="img-fluid z-depth-1-half"/>*/}
                        {/*</div>*/}

                        {/*</div>*/}
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-4">
                                <a href="https://front-end-demo.netlify.com">
                                    <img src={fe} alt="food" className="img-fluid z-depth-1-half"/>
                                </a>
                                <h4 className="text-center mt-3 font-weight-bold">
                                    Sample Front End Store
                                </h4>
                                <CardBody>
                                    <p className="grey-text">
                                        This is one of the first projects that I started working on. It is a front end
                                        only sample store built using React and bootstrap.
                                    </p>
                                    <a href="https://github.com/mrsir52/E-Commerce">
                                        <Button color="primary" size="sm">View Code</Button>
                                    </a>
                                </CardBody>

                            </div>
                            <div className="col-lg-6 col-md-12 mb-4">
                                <a href="https://potluck-33df5.firebaseapp.com/">
                                    <img src={food} alt="food" className="img-fluid z-depth-1-half"/>
                                </a>
                                <h4 className="text-center mt-3 font-weight-bold">
                                    Potluck Planner
                                </h4>
                                <CardBody>
                                    <p className="grey-text">
                                        I wanted to try firebase out so I made a quick project. This is a full stack
                                        application that usese React for the front end and
                                        Firebase for the back. It also uses the built in authentication options included
                                        with Firebase.
                                    </p>
                                    <a href="https://github.com/mrsir52/potluck-test">
                                        <Button color="primary" size="sm">View Code</Button>
                                    </a>
                                </CardBody>

                            </div>
                            <section className="container">
                                <div>
                                    <div className="">
                                        <h2 className="mt-5">Connect with me on LinkedIn or view more of my code.</h2>
                                        <a href="https://www.linkedin.com/in/manny-torres-ut/"><i
                                            className="fab fa-linkedin icon-link"></i></a>
                                        <a href="https://github.com/mrsir52"><i
                                            className="fab fa-github-square icon-link"></i></a>
                                    </div>
                                </div>
                            </section>
                            {/*<div className="col-lg-4 col-md-12 mb-4">*/}
                            {/*<img src={fe} alt="food" className="img-fluid z-depth-1-half"/>*/}
                            {/*<h4 className="text-center mt-3 font-weight-bold">*/}
                            {/*Potluck Planner*/}
                            {/*</h4>*/}
                            {/*<CardBody>*/}
                            {/*<p className="grey-text">*/}
                            {/*I wanted to try firebase out. This uses the build in firebase authentication*/}
                            {/*</p>*/}
                            {/*</CardBody>*/}

                            {/*</div>*/}
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
