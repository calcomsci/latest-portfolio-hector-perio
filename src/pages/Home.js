import React from 'react';
import ContactList from '../components/ContactList';
import '../styles/Home.css'
import spockHeadShot from '../assets/passport.jpg'

const Home = () => {
    return (
        <div>
            <h1 id='name'>Hi there! Welcome to Hector Perio's Portfolio Page</h1>
            <div className='home-container'>
                <img
                    className='spock-headshot'
                    src={spockHeadShot}
                    alt="Afro Spock"
                />

                <p className='bio-text'>My name is Hector Perio and I'm a Full Stack Software Engineer with a focused technical backend programming language in C++. In front end software development I use React, JavaScript, HTML, node.js, Inquirer, and CSS.

I also have passion for competitive gaming and e-sports. Many of us in the computer science field were taught to make logic-based games like chess, scrabble, and snakes and ladders. Those made a lasting impression on me.

Last, but certainly not least, I like to commute and leisure using vehicles with no carbon footprint and use vehicles free from fossil fuels. I try to make this world a better place than when I found it when I get the chance.</p>
            </div>

            <ContactList />
        </div>
    );
};

export default Home;