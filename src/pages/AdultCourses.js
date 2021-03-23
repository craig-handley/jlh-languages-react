import React, { Fragment } from "react";
import french_flyer from "../img/french_flyer.png";
import spanish_flyer from "../img/spanish_flyer.png";
import general_blurb from "../img/general_blurb.png";
import Navigation from './Navigation';

const AdultCourses = () => {
  return (
    <Fragment>
      <Navigation subpage="subpage"></Navigation>
      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2>Adult Courses</h2>
          </header>
          <div className="flex flex-2">
            <article>
              <header>
                <h3>French Adult Courses</h3>
              </header>
              <a href="/adult-courses-french">
                <div className="image fit with-border">
                  <img src={french_flyer} alt=""></img>
                </div>
              </a>
              <footer>
                <a href="/adult-courses-french" className="button special">More</a>
              </footer>
              <br></br>
            </article>
            <article>
              <header>
                <h3>Spanish Adult Courses</h3>
              </header>
              <a href="/adult-courses-spanish">
                <div className="image fit with-border">
                  <img src={spanish_flyer} alt=""></img>
                </div>
              </a>
              <footer>
                <a href="/adult-courses-spanish" className="button special">More</a>
              </footer>
              <br></br>
            </article>
          </div>
          <div className="inner">
            <article>
              <div className="image fit smaller with-border">
                <img src={general_blurb} alt=""></img>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AdultCourses;