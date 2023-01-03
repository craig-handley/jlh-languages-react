import React, { Fragment } from "react";
// import schools_french from "../img/schools_french.png";
// import schools_spanish from "../img/schools_spanish.jpg";
import flyer_both from "../img/flyer_both.png";
import Navigation from './Navigation';

const Schools = () => {
  return (
    <Fragment>
      <Navigation subpage="subpage"></Navigation>
      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2>French Restaurant Experiences For Schools</h2>
          </header>
          <div className="flex flex-2">
            <article >
              <header className="align-center">
                <h3>At Our Restaurant</h3>
              </header>
              {/* <div className="image fit with-border">
                <a href="/schools-french">
                  <img src={schools_french} alt=""></img>
                </a>
              </div> */}
              <footer className="align-center">
                <a href="/schools-french-restaurant" className="button special">More</a>
              </footer>
            </article>
            <article>
              <header className="align-center">
                <h3>At Your School</h3>
              </header>
              {/* <div className="image fit with-border">
                <a href="/schools-french-mobile">
                  <img src={schools_spanish} alt=""></img>
                </a>
              </div> */}
              <footer className="align-center">
                <a href="/schools-french-mobile" className="button special">More</a>
              </footer>
            </article>
          </div>
          <br />
          <div className="image fit with-border">
            <img src={flyer_both} alt=""></img>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Schools;

