import React, { Fragment } from "react";
import schools_french from "../img/schools_french.png";
import schools_spanish from "../img/schools_spanish.jpg";
import Navigation from './Navigation';

const Schools = () => {
  return (
    <Fragment>
      <Navigation subpage="subpage"></Navigation>
      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2>Restaurant Experiences For Schools</h2>
          </header>
          <div className="flex flex-2">
            <article>
              <header>
                <h3>French Experience</h3>
              </header>
              <div className="image fit with-border">
                <a href="/schools-french">
                  <img src={schools_french} alt=""></img>
                </a>
              </div>
              <footer>
                <a href="/schools-french" className="button special">More</a>
              </footer>
            </article>
            <article>
              <header>
                <h3>Spanish Experience</h3>
              </header>
              <div className="image fit with-border">
                <a href="/schools-spanish">
                  <img src={schools_spanish} alt=""></img>
                </a>
              </div>
              <footer>
                <a href="/schools-spanish" className="button special">More</a>
              </footer>
            </article>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Schools;

