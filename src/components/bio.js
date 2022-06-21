import React from "react";
import image from "../images/IMG_1068.jpg";

export default function Bio(){
    return (
        <main>
        <div className="img-container"><img className="img-profile"src={image} alt="profile-img"/></div>
        <h2>Egemen Durmus</h2>
        <h4>Java Full Stack Developer</h4>
        <div className="button-container"><a href="https://www.github.com/Egemen127" target="_blank" rel="noreferrer" ><div className="button1">Github</div></a>
        <a href="https://www.linkedin.com/in/egemen-d-b80941180/" target="_blank" rel="noreferrer" ><div className="button2">Linkedin</div></a></div>
        <h3>About</h3>
        <p>I am a Master's student at Pace University in NYC, currently studying software development and engineering. I learned about software engineering theory through my classes. I also learned about fullstack development using java in Genspark training. </p>
        <h3>Interests</h3>
        <p>Playing guitar, playing chess, solving problems, watching programming tutorials on youtube</p>
        </main>
    )
}