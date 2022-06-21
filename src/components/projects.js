import React from "react";
import img1 from "../images/BoardingPass.PNG";
import img2 from "../images/BoardingPassTicket.PNG";
import img3 from "../images/HumansVsGoblins.PNG";
import img4 from "../images/HumansVsGoblinsGame.PNG";
import img5 from "../images/Hangman.PNG";
import img6 from "../images/HangmanEnd.PNG";
import img7 from "../images/HoboReview.PNG";
import img8 from "../images/HoboMyProfile.PNG";
import img9 from "../images/FlightAPI.PNG";
import img10 from "../images/FlightAPI2.PNG";
import img11 from "../images/GuessTheNumber.PNG";
import img12 from "../images/GuessTheNumberCode.PNG";


export default function MyProjects(){
    return (<div className="project-container">
        <div className="project">
            <img className="img-project"src={img1} alt="project-img"/><img className="img-project" src={img2} alt="project-img"/>
            <h2>Boarding Pass</h2>
        <p>An application that generates tickets according to given input. The generated tickets are stored in a text file. The GUI was done using JavaFX. </p></div>
        <div className="project">
            <img className="img-project"src={img3} alt="project-img"/><img className="img-project" src={img4} alt="project-img"/>
            <h2>Humans vs Goblins</h2>
        <p>A board game where the player gets chased by goblins. In order to win he has to defeat all the goblins and collect the treasures! The GUI was done using JavaFX.</p></div>
        <div className="project">
            <img className="img-project"src={img5} alt="project-img"/><img className="img-project" src={img6} alt="project-img"/>
            <h2>Hangman</h2>
        <p>Classic hangman game written in Java that you can play on command prompt. When the game starts, a unique word is pulled up from a text file that contains more than 50000 words. When the game ends, player's score is stored in a text file.</p></div>
        <div className="project">
            <img className="img-project"src={img7} alt="project-img"/><img className="img-project" src={img8} alt="project-img"/>
            <h2>HOBO.COM</h2>
        <p>A social platform where people looking for a roommate can connect and leave reviews on each other. Web application is developed using flask framework and SqlAlchemy is used for database connection. </p></div>
        <div className="project">
            <img className="img-project"src={img9} alt="project-img"/><img className="img-project" src={img10} alt="project-img"/>
            <h2>Flight Management API</h2>
        <p>A REST API for managing flight and passenger information. This api performs CRUD operations in a database and handles two tables that have manytomany relation with respect to each other. Spring Boot is used to develop the api. Mysql and JPA are used for the database connection and CRUD operations respectively.</p></div>
        <div className="project">
            <img className="img-project"src={img12} alt="project-img"/><img className="img-project" src={img11} alt="project-img"/>
            <h2>Guess The Number</h2>
        <p>A game where the player guesses a random number from 1 to 20. </p></div>
    </div>)
}