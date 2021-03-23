import React, { Fragment } from "react";
import events_01 from "../img/events_01.png";
import Navigation from './Navigation';

const Events = () => {
  return (
    <Fragment>
      <Navigation subpage="subpage"></Navigation>
      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2>Events</h2>
          </header>
          <div className="inner">
            <article>
              <div className="image fit smaller">
                <img src={events_01} className="with-border" alt=""></img>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Events;

