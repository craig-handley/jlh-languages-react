import React, { Fragment } from "react";
import Navigation from './Navigation';
import testimonials_01 from "../img/testimonials_01.png";
import testimonials_02 from "../img/testimonials_02.jpg";
import testimonials_03 from "../img/testimonials_03.png";
import testimonials_04 from "../img/testimonials_04.png";

const Testimonials = () => {
  return (
    <Fragment>
      <Navigation subpage="subpage"></Navigation>
      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2>Testimonials</h2>
          </header>
          <div className="flex flex-1">
            <article>
              <blockquote>
                "It’s lively and I like the way we learn in complete sentences. The variety keeps your attention. It was fun. You learn quickly and the time passes very quickly."
                <br></br>
                <br></br>
                - Sarah, Aldridge
              </blockquote>
              <div className="image fit smaller">
                <img src={testimonials_01} alt="" className="with-border"></img>
              </div>
              <blockquote>
                "Jane is very approachable and goes out of her way to make our sessions lively and enjoyable."
                <br></br>
                <br></br>
                - Dorothy, Brownhills
              </blockquote>
              <div className="image fit smaller">
                <img src={testimonials_02} alt="" className="with-border"></img>
              </div>
              <blockquote>
                "I have wanted to learn French for years but never managed to find the right class. Jane's method of teaching is one of mixing the learning with fun and empathy. I really look forward to our lessons."
                <br></br>
                <br></br>
                - George, Cannock
              </blockquote>
              <blockquote>
                "Never any good with foreign languages at school or since but have found a new desire to learn French and Jane's lessons are encouraging me to be confident in giving it a go!"
                <br></br>
                <br></br>
                - Linzi, Cannock
              </blockquote>
              <blockquote>
                "I do love the variety of activities on offer."
                <br></br>
                <br></br>
                - Brendan, Great Wyrley
              </blockquote>
              <blockquote>
                "It is relaxed and at times there are funny moments when we got it wrong. All participants gelled and helped each other."
                <br></br>
                <br></br>
                - Christine, Great Wyrley
              </blockquote>
              <div className="image fit smaller">
                <img src={testimonials_03} alt="" className="with-border"></img>
              </div>
              <blockquote>
                "What I like about the lessons is that we are given information about how to learn and we are encouraged to look at things outside the lesson (a website or a radio programme) if they are of interest to us."
                <br></br>
                <br></br>
                - Neil, Chelsyn Hay
              </blockquote>
              <div className="image fit smaller">
                <img src={testimonials_04} alt="" className="with-border"></img>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonials;

