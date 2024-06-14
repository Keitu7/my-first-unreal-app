import React from 'react';
import '../styles/Home.css';
import { Link} from 'react-router-dom';

function Home() {
    return (
    <div className='home'>
        <div className='myName'>
        <div className='background'></div>
            <h1 className='symbol'> ^EITVWET5E</h1>
            <p className='name'>KEITUMERCEDES</p>
            <p className='intro'>Visual Designer</p>   
            <div className='prompt'>
                <h2 id='about'>I am an Aspiring Visual Designer</h2>
                <p className='para1'> 
                   Great design has the power to captivate and move the attention of viewers in ways words, gestures and would similarly do - 
                   I am to eventually reach evoking the emtion of complete awe to my viewers.
                </p>
                <p className='para2'> 
                   My name is Keitu Mokgabudi, an animation and interactive media student. I aspire to learn more on illustration and concept creation in the aniamtion field; 
                   to learn more and eventually specialize in interactive website designs that evoke the ease of user interactivity and experience and evoke emothional feelings.
                   I aim to grow my knowledge in website design, moreover still as a student in this field, I do believe there is still much to learn. 
                   This site piece is one still much in progress and I hope to grow with it as I learn more on providing its viewers with designs that will bring beauty and creatvity their user experience.
                </p>
            </div>
        </div>
        <>
         <h3 id='designHeading'>DESIGN</h3>
         <div className='designBox'></div>
         <p className='popText'>The design process coming into existance of the site, with every click enjoyable</p>
         <p><Link to='/about' className='button'>LET'S GO</Link></p>

         <h3 id='theoryHeading'>THEORY</h3>
         <div className='theoryBox'></div>
         <p className='popText'>The theory section reflects on the technical challenges and process of creating the site</p>
         <p><Link to='/about' className='button'>LET'S GO</Link></p>

         <h3 id='internetHeading'>NET ART</h3>
         <div className='internetBox'></div>
         <p className='popText'>The internet art aims to tell a story through a connected series of hyperlinks </p>
         <p><Link to='/internetart' className='button'>LET'S GO</Link></p>
        </>

        <h1 className='symbolEnd'> ^EITVWET5E</h1>
        <p className='nameEnd'>KEITUMERCEDES</p>
    </div>
    );
}

export default Home;

/*image source: Photo by GEORGE DESIPRIS:< https://www.pexels.com/photo/black-cruiser-motorcycle-899238/>. Accessed: 29 May 2024.*
Code and deplay a react Portfolio - React Personal Portfolio Website. 2 June 22.Accessed: 20 May 2024.
Open AI.prompt: Navbar router-dom in react Accessed: 29 May 2024.*/