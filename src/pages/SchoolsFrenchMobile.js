import React, { Fragment } from "react";
import schools_french_02 from "../img/flyer_1.png";
import schools_french_03 from "../img/flyer_2.png";
import mobile1 from "../img/mobile1.jpg";
import mobile2 from "../img/mobile2.png";
import mobile3 from "../img/mobile3.jpg";
import mobile4 from "../img/mobile4.jpg";
import Navigation from './Navigation';

const SchoolsFrench = () => {
  return (
    <Fragment>
      <Navigation subpage="subpage"></Navigation>
      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2>Mobile French Restaurant Experience</h2>
          </header>
          <div className="flex flex-1">
            <article>
              <p className="align-center">Our mobile experience caters for a minimum of 30 students and a maximum of 45 students in each session (subject to the size of your venue.)</p>
              <p className="align-center">Our team can deliver multiple sessions in one day and can work with up to 135 students each day.</p>
              <footer className="align-center">
                <a href="/contact" className="button special">How To Book</a>
              </footer>
              <br></br>
              <br></br>
              <div className="image fit smaller-still">
                <img src={schools_french_02} alt="" className="with-border"></img>
              </div>
              <div className="image fit smaller-still">
                <img src={schools_french_03} alt="" className="with-border"></img>
              </div>
              <header>
                <h3>What does the mobile French restaurant experience involve?</h3>
              </header>
              <p>Our team of qualified, DBS checked language teachers come to your school to create a French restaurant in the classroom or venue allocated to us. We create the ambience of France through language, food, drink, music and props so that your students can experience a taste of France without leaving the school premises. Students gain an insight into French culture and gain the opportunity of using the language they are learning in a practical, enjoyable and motivating way.</p>
              <div className="image fit smaller-still">
                <img src={mobile1} alt="" className="with-border"></img>
              </div>

              <header>
                <h3>What are the advantages of the mobile French restaurant experience?</h3>
              </header>
              <ul>
                <li>Students gain a taste of France without the commitment to, or the financial burden of, a foreign trip. It could be used as an alternative to a foreign trip or as a springboard to encourage reluctant students to participate in a foreign trip in the future.</li>
                <li>There are no transportation costs which makes this experience financially accessible for a larger proportion of students.</li>
                <li>This experience enhances students’ cultural awareness. Students are encouraged to be curious about how life in France is different from life in Britain through experiencing French cuisine and the ambiance of France.</li>
                <li>The experience brings the subject to life as students have to use their French actively for a real purpose. Once students realise that languages can be useful this may motivate them to continue with their studies with increased enthusiasm. For example, this event could be used as a motivational tool for students prior to their options in Year 8 or Year 9.</li>
                <li>Students will be required to speak French to order a meal. The successful completion of this task provides concrete proof to the students themselves that they can actually “do” French and this can build confidence and enhance motivation.</li>
                <li>Using French in an unscripted way develops students’ coping mechanisms which are relevant in exam situations. It can help students understand that their spoken language does not have to be perfect as long as their message is conveyed.</li>
                <li>Visits are tailored to meet the specific objectives of each individual group e.g. to motivate reluctant learners, to stretch the most able, to increase confidence of students when speaking, to increase spontaneity etc. </li>
                <li>There are ample opportunities for photos which can be used on websites, newsletters and newspapers to raise the profile of the school’s MFL department.</li>
                <li>Last but not least: it is great fun and a thoroughly enjoyable experience for students and teachers alike!</li>
              </ul>
              <div className="image fit smaller-still">
                <img src={mobile2} alt="" className="with-border"></img>
              </div>

              <header>
                <h3>What are people saying?</h3>
              </header>
              <p>“They loved it! They loved the fact that they were immersed in the French lanuguage and it made them think in French!” - Tettenhall College, Wolverhampton.</p>
              <p>“The booking process was easy and straight-forward. Great communucation!” - Kingsmead School, Cannock.</p>
              <p>“Some students gained in confidence and all of them they gained great memories!” - Newcastle-under-Lyme School.</p>

              <div className="image fit smaller-still">
                <img src={mobile3} alt="" className="with-border"></img>
              </div>

              {/* <div className="image fit smaller-still">
                <img src={mobile4} alt="" className="with-border"></img>
              </div> */}

              <p>If you would like to receive a quote for a visit, please contact jane@jlhlanguages.org or go to our 'How To Book' page.</p>
            </article>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SchoolsFrench;

