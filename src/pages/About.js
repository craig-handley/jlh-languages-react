import React, { Fragment } from "react";
import Navigation from './Navigation';
import about_01 from "../img/about_01.jpg";
import fliss from "../img/fliss.jpg";

const About = () => {
  return (
    <Fragment>
      <Navigation subpage="subpage"></Navigation>
      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2>Meet The Team</h2>
          </header>
          <div className="flex flex-2">
            <article>
              <header>
                <h3>A bit about me</h3>
              </header>
              <p>My name is Jane Handley and I am passionate about languages.</p>
              <p>I have 20 years' experience of teaching French and German in secondary schools and primary schools as well as teaching adults in commercial settings.</p>
              <p>I have spent extended periods living and working abroad. I have worked in Tübingen (Germany), Paris, Strasbourg, Monaco, Singapore and Nigeria.</p>
              <p>I set up JLH Languages in 2017 to spread the joy of language learning in an innovative and effective way.</p>
              <div className="image fit" style={{ width: "10em" }}>
                <img src={about_01} alt=""></img>
              </div>
              <p>Email: jane@jlhlanguages.org</p>
              <p>Phone: 07793 556020</p>
            </article>
            <article>
              <header>
                <h3>My qualifications</h3>
              </header>
              <p>Valid DBS.</p>
              <p>Certificate of English Language Teaching to Adults (CELTA), International Teaching and Training Centre, Bournemouth, 2001.</p>
              <p>Post Graduate Certificate of Education (PGCE), University of Sheffield, 1997.</p>
              <p>BA Honours Degree in Modern Languages (French/German) and European Studies, University of Bath, Result obtained 2.i., 1995.</p>
            </article>
          </div>
          <div>
            <br></br>
            <br></br>
          </div>
          <div className="flex flex-2">
            <article>
              <header>
                <h3>Fliss Davies - Spanish Specialist</h3>
              </header>
              <p>Hi. I’m Fliss and I’m a hispanophile! I have a passion for all things Spanish! Secondary trained, I have experience teaching French and Spanish to A-level, and have more recently taught adults and primary children alike.</p>
              <p>I spent my year abroad at university in Besançon and Valladolid and have had the pleasure of being able to travel in both countries extensively as well as South America.</p>
              <div className="image fit" style={{ width: "10em" }}>
                <img src={fliss} alt=""></img>
              </div>
              <p>Email: fliss@jlhlanguages.org</p>
              <p>Phone: 07967 653035</p>
            </article>
            <article>
              <header>
                <h3>My qualifications</h3>
              </header>
              <p>Valid DBS.</p>
              <p>Post Graduate Certificate of Education (PGCE), 2005.</p>
              <p>BA Honours Degree in Modern Foreign Language Studies, University of Leicester, 2005.</p>
            </article>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;

