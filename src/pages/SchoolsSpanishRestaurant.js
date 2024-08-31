import React, { Fragment } from "react";
import spanish_staff from "../img/spanish_staff_2020.jpg";
import Navigation from './Navigation';
import spanish_experience_2022 from "../img/spanish_experience_2022.png";
import spanish_restaurant from "../img/spanish_restaurant.jpg";

const SchoolsSpanishRestaurant = () => {
  return (
    <Fragment>
      <Navigation subpage="subpage"></Navigation>
      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2>Spanish Restaurant Experience</h2>
          </header>
          <div className="flex flex-1">
            <article>
              <header>
                <h3 className="align-center">At our restaurant</h3>
              </header>

              <p className="align-center">Our restaurant in Cannock (WS12 2DN) caters for a minimum of 30 and a maximum of approx. 45 students.</p>
              <p className="align-center">Spanish breakfast experience : from £24.50 per head.</p>
              <p className="align-center">Spanish three course lunch experience : £36.50 per head.</p>
              <p className="align-center">Staff meals are free.</p>

              <header className="align-center">
                <h3>At your school</h3>
              </header>

              <p className="align-center">Our mobile experience caters for a minimum of 30 students and a maximum of 45 students in each session (subject to the size of your venue.)</p>
              <p className="align-center">Our team can deliver multiple sessions in one day and can work with up to 135 students each day.</p>


              <footer className="align-center">
                <a href="/contact" className="button special">How To Book</a>
              </footer>
              <br></br>
              <br></br>
              <div className="image fit smaller-still">
                <img src={spanish_experience_2022} alt="" className="with-border"></img>
              </div>
              <div className="image fit smaller-still">
                <img src={spanish_restaurant} alt="" className="with-border"></img>
              </div>
              {/* <div className="image fit smaller-still">
                <img src={menu_for_restaurant_1} alt="" className="with-border"></img>
              </div>
              <div className="image fit smaller-still">
                <img src={menu_for_restaurant_2} alt="" className="with-border"></img>
              </div> */}
              <header>
                <h3>What does the Spanish restaurant experience involve?</h3>
              </header>
              <p>Our team of qualified, DBS checked language teachers create the ambience of Spain through language, food, drink, music and props in our restaurant near to Cannock (WS12 2DN.) This allows your students to experience a taste of Spain without leaving the country. Students gain an insight into Spanish culture and gain the opportunity of using the language they are learning in a practical, enjoyable and motivating way.</p>
              <p>We cater for both primary and secondary students.</p>
              {/* <div className="image fit smaller-still">
                <img src={Redhill_2} alt="" className="with-border"></img>
              </div> */}
              <header>
                <h3>What are the benefits of the Spanish experience?</h3>
              </header>
              <ul>
                <li>Students gain a taste of Spain without the commitment to, or the financial burden of, a foreign trip. It could be used as an alternative to a foreign trip or as a springboard to encourage reluctant students to participate in a foreign trip in the future.</li>
                <li>This experience enhances students’ cultural awareness. Students can be encouraged to be curious about how life in Spain is different from life in Britain through experiencing Spanish cuisine and the ambience of Spain.</li>
                <li>The teaching in school prior to the event is given a sharper focus as the students know that they will use the language for a concrete purpose. Students are more likely to be motivated to learn the language required and practise it so they can use it effectively when called upon to do so during their visit.</li>
                <li>The experience brings the subject to life as students have to use their Spanish actively for a real purpose. Once students realise that languages can be useful this may motivate them to continue with their studies with increased enthusiasm. For example, this event could be used as a motivational tool for students prior to their options in Year 8 or Year 9.</li>
                <li>Students will be required to speak Spanish to order a meal. The successful completion of this task provides concrete proof to the students themselves that they can actually “do” Spanish and this can build confidence and enhance motivation.</li>
                <li>Using Spanish in an unscripted way develops students’ coping mechanisms which are relevant in exam situations. It can help students understand that their spoken language does not have to be perfect as long as their message is conveyed.</li>
                <li>Visits are tailored to meet the specific objectives of each individual group e.g. to motivate reluctant learners, to stretch the most able, to increase confidence of students when speaking, to increase spontaneity etc.</li>
                <li>Specific cross-curricular themes can be included: numeracy, healthy eating, food technology, music, authentic texts......</li>
                <li>When students return to their classroom after the visit, they appreciate that the language they are learning is real i.e. that Spanish is not simply an academic subject but is one with real value and purpose.</li>
                <li>There are ample opportunities for photos which can be used on websites, newsletters and newspapers to raise the profile of the school’s MFL department.</li>
                <li>Last but not least: it is great fun and a thoroughly enjoyable experience for students and teachers alike!</li>
              </ul>
              <div className="image fit smaller-still">
                <img src={spanish_staff} alt="" className="with-border"></img>
              </div>

              <header>
                <h3>What are people saying?</h3>
              </header>



              <p>Here are some of the things the teachers said:
                <li>"They have enjoyed the experience of eating Spanish food and interacting with staff who only speak in Spanish as well as the environment and the activities. The students gained confidence to speak in Spanish as well as learning new vocabulary that they will remember for a long time."</li>
                <li>"They gained cultural capital and used Spanish for a real purpose."</li>
              </p>
              <p>The feedback from the students was positive too:
                <li>"I've enjoyed the food and interacting with the waiters in Spanish. Actually talking to someone in Spanish helped my confidence and my fluency."</li>
                <li>"I had to speak Spanish to order my food which made me more confident."</li>
                <li>"I have enjoyed stepping out of my comfort zone by speaking Spanish in public."</li>
              </p>
              <p>When asked if they felt their Spanish or their confidence using the language had improved, they said:
                <li>"Yes, because when I was ordering food I was understandable."</li>
                <li>"Yes, because I have been speaking it all day."</li>
                <li>"Yes, I have started to worry less about what I’m saying."</li>
              </p>

              <p>If you would like to receive a quote for a visit, please contact jane@jlhlanguages.org or go to our 'How To Book' page.</p>
            </article>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SchoolsSpanishRestaurant;

