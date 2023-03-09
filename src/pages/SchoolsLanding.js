import React, { Fragment } from "react";
import schools_french from "../img/schools_french.png";
import schools_spanish from "../img/schools_spanish.jpg";
// import flyer_both from "../img/flyer_both.png";
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
            <article >
              {/* <header className="align-center">
                <h3>At Our Restaurant</h3>
              </header> */}
              <div className="image fit with-border">
                <a href="/schools-french">
                  <img src={schools_french} alt=""></img>
                </a>
              </div>
              {/* <footer className="align-center">
                <a href="/schools-french" className="button special">More</a>
              </footer> */}
            </article>
            <article>
              {/* <header className="align-center">
                <h3>At Your School</h3>
              </header> */}
              <div className="image fit with-border">
                <a href="/schools-spanish">
                  <img src={schools_spanish} alt=""></img>
                </a>
              </div>
              {/* <footer className="align-center">
                <a href="/schools-french-mobile" className="button special">More</a>
              </footer> */}
            </article>
          </div>
          <article>
            <header><h3>Terms and Conditions for Visit to our Restaurant</h3></header>

            <header><h4>General</h4></header>

            <p>The duration of the immersive restaurant experience is as follows:</p>
            <p>Breakfast: 1 hour 30 minutes
              <br />
              Lunch: 2 hours 30 minutes</p>
            <p>The start time defined as the arrival time stated on the booking confirmation form. It is not possible to add
              on time on the day of the event if the group arrives late. The restaurant and our staff are booked for the
              times stated on your confirmation form only. Therefore please ensure that you arrive on time. You are
              welcome to arrive early and use the toilets before the event starts and there is a large, secure car park
              directly next to the venue where students can stretch their legs. Please note: It is possible to book
              additional hours or change your start time but this must be done at least 14 days prior to your visit and
              may incur extra charges.</p>
            <p>The events are staffed by fully qualified, experienced teachers. However, the members of staff from the
              school are ultimately responsible for discipline and at least one staff member should be with the students
              throughout the visit.</p>
            <p>Toilets: At the restaurant, there are 2 male toilets and 2 female toilets. Members of staff from the visiting
              school are responsible for the management of access to the toilets i.e. ensuring that no more than 2
              female and 2 male students visit the toilet at any one time. Regular visits should be made throughout the
              visit to ensure adequate supervision.</p>
            <p>All props (hats etc.) need to be returned at the end of session. Any damages to equipment caused by
              students could result in an extra charge being applied in order to replace the equipment. School staff
              should ensure that students do not take any props with them at the end of the session. If this does occur,
              please return the items ASAP.</p>
            <br />

            <header><h4>Booking Process and Payment</h4></header>

            <p>A non-refundable deposit of £50.00 is required to secure your booking on your chosen date. Your booking
              is not guaranteed until the deposit is received</p>
            <p>If no deposit is received within 30 working days of making the booking, we reserve the right to cancel your
              booking.</p>
            <p>We must receive payment in full at least 2 weeks prior to the visit. You can pay by BACS, cheque or card
              (additional charge incurred for card payments.)</p>
            <br />

            <header><h4>Booking Amendments and Cancellations</h4></header>

            <p>The booking can be amended (number of students, arrival time etc) up to 2 weeks prior to the event as
              long as the change can be accommodated by the JLH Languages’ Team. However, once that threshold has
              been crossed, no changes are possible.</p>
            <p>Cancellation of the event in good time (i.e. not in the 2 weeks preceding the event) will result in the loss of
              the deposit made. Any other monies paid will be refunded.</p>
            <p>If the event is cancelled during the 2 week period prior to the event, the school is liable for any costs
              incurred (e.g. staffing costs, supplies purchased.) A partial refund can be made (i.e. the cost of the event
              minus the costs incurred) or this sum can be carried over to pay for an event on an alternative date.</p>
            <br />




          </article>

          {/* <br />
          <div className="image fit with-border">
            <img src={flyer_both} alt=""></img>
          </div> */}
        </div>
      </section>
    </Fragment>
  );
};

export default Schools;

