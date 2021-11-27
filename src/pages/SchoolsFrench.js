import React, { Fragment } from "react";
import Redhill_2 from "../img/Redhill-2.jpg";
import menu1 from "../img/1.png";
import menu_for_restaurant_1 from "../img/menu-for-restaurant-1.png";
import menu_for_restaurant_2 from "../img/menu-for-restaurant-2.png";
import schools_french_04 from "../img/schools_french_04.jpg";
import CCHS_Image from "../img/CCHS-Image-6.jpg";
import Navigation from './Navigation';

const SchoolsFrench = () => {
  return (
    <Fragment>
      <Navigation subpage="subpage"></Navigation>
      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2>French Restaurant Experience</h2>
          </header>
          <div className="flex flex-1">
            <article>
              <p className="align-center">Our restaurant in Cannock (WS12 2DN) caters for a minimum of 30 students and a maximum of 42.</p>
              <p className="align-center">The price per head starts from £14.50 per head. Staff meals are free.</p>
              <footer className="align-center">
                <a href="/contact" className="button special">How To Book</a>
              </footer>
              <br></br>
              <br></br>
              <div className="image fit smaller-still">
                <img src={Redhill_2} alt="" className="with-border"></img>
              </div>
              <div className="image fit smaller-still">
                <img src={menu_for_restaurant_1} alt="" className="with-border"></img>
              </div>
              <div className="image fit smaller-still">
                <img src={menu_for_restaurant_2} alt="" className="with-border"></img>
              </div>
              <header>
                <h3>What does the French restaurant experience involve?</h3>
              </header>
              <p>Our team of qualified, DBS checked language teachers create the ambience of France through language, food, drink, music and props in our restaurant near to Cannock (WS12 2DN.) This allows your students to experience a taste of France without leaving the country. Students gain an insight into French culture and gain the opportunity of using the language they are learning in a practical, enjoyable and motivating way.</p>
              <p>We cater for both primary and secondary students.</p>
              {/* <div className="image fit smaller-still">
                <img src={Redhill_2} alt="" className="with-border"></img>
              </div> */}
              <header>
                <h3>What are the benefits of the French experience?</h3>
              </header>
              <ul>
                <li>Students gain a taste of France without the commitment to, or the financial burden of, a foreign trip. It could be used as an alternative to a foreign trip or as a springboard to encourage reluctant students to participate in a foreign trip in the future.</li>
                <li>This experience enhances students’ cultural awareness. Students can be encouraged to be curious about how life in France is different from life in Britain through experiencing French cuisine and the ambiance of France.</li>
                <li>The teaching in school prior to the event is given a sharper focus as the students know that they will use the language for a concrete purpose. Students are more likely to be motivated to learn the language required and practise it so they can use it effectively when called upon to do so during their visit.</li>
                <li>The experience brings the subject to life as students have to use their French actively for a real purpose. Once students realise that languages can be useful this may motivate them to continue with their studies with increased enthusiasm. For example, this event could be used as a motivational tool for students prior to their options in Year 8 or Year 9.</li>
                <li>Students will be required to speak French to order a meal. The successful completion of this task provides concrete proof to the students themselves that they can actually “do” French and this can build confidence and enhance motivation.</li>
                <li>Using French in an unscripted way develops students’ coping mechanisms which are relevant in exam situations. It can help students understand that their spoken language does not have to be perfect as long as their message is conveyed.</li>
                <li>Visits are tailored to meet the specific objectives of each individual group e.g. to motivate reluctant learners, to stretch the most able, to increase confidence of students when speaking, to increase spontaneity etc.</li>
                <li>Specific cross-curricular themes can be included: numeracy, healthy eating, food technology, music, authentic texts......</li>
                <li>When students return to their classroom after the visit, they appreciate that the language they are learning is real i.e. that French is not simply an academic subject but is one with real value and purpose.</li>
                <li>There are ample opportunities for photos which can be used on websites, newsletters and newspapers to raise the profile of the school’s MFL department.</li>
                <li>Last but not least: it is great fun and a thoroughly enjoyable experience for students and teachers alike!</li>
              </ul>
              <div className="image fit smaller-still">
                <img src={schools_french_04} alt="" className="with-border"></img>
              </div>

              <header>
                <h3>What are people saying?</h3>
              </header>
              <p>The feedback from the groups that have taken part in the French restaurant experiences has been overwhelmingly positive:</p>
              <p>“Brilliant! Exactly what I have always wanted to arrange for my students but I’ve never had the time to do it. Simply brilliant!” French teacher, Willenhall</p>
              <p>“I will be looking at organising this event again next year as I was very pleased with my students using so much French in such a short time.” Head of Department, Sandwell</p>

              <div className="image fit smaller-still">
                <img src={CCHS_Image} alt="" className="with-border"></img>
              </div>

              <p>If you would like to receive a quote for a visit, please contact jane@jlhlanguages.org or go to our 'How To Book' page.</p>
            </article>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SchoolsFrench;

