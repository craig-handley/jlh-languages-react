import React, { Fragment } from "react";
import home_schooling from "../img/home_schooling.png";
import tutoring_01 from "../img/tutoring_01.png";
import tutoring_02 from "../img/tutoring_02.png";
import Navigation from './Navigation';

const AdultCourses = () => {
  return (
    <Fragment>
      <Navigation subpage="subpage"></Navigation>
      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2>Tutoring</h2>
          </header>
          <div className="inner">
            <article>
              <div className="image fit smaller">
                <img src={home_schooling} alt=""></img>
              </div>
              <p>
                Group tuition price on request.
              </p>
              <div className="image fit smaller">
                <img src={tutoring_01} alt=""></img>
              </div>
              <div className="image fit smaller">
                <img src={tutoring_02} alt=""></img>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AdultCourses;