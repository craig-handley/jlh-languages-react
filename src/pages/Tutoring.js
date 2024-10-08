import React, { Fragment } from "react";
import katie_tutoring from "../img/katie-tutoring.png";
import dan_tutoring from "../img/dan-tutoring.png";
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
          <div className="align-center">
            <p>Prices from £35 per hour</p>
            <p>Private tuition for GCSE and A-level examinations</p>
            <p>Intensive one-to-one tuition for adults</p>
            <p>Preperation for French nationality exam (TCF)</p>
            <p>Business French lessons</p>
          </div>
          <br></br>
          <div className="inner">
            <article>
              <div className="image fit smaller">
                <img src={katie_tutoring} alt=""></img>
              </div>
              <div className="image fit smaller">
                <img src={dan_tutoring} alt=""></img>
              </div>
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