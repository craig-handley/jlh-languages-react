import React, { Fragment } from "react";
import banner from "../img/banner.jpg";
import logo from "../img/jlh-languages.png";
import jh_tv from "../img/jlh_tv.mp4";
import table from "../img/Table1.jpg";
import Navigation from './Navigation';

const Home = () => (
  <Fragment>
    <Navigation></Navigation>
    <section id='banner' style={{ backgroundImage: `url(${banner})` }}>
      <img src={logo} style={{ maxWidth: '25%' }} alt=''></img>
    </section>
    <section id="one" className="wrapper">
      <div className="inner">
        <div className="flex flex-2">
          <article>
            <header>
              <h3>French Lessons on Zoom</h3>
            </header>
            <div className="video-size">
              <video src={jh_tv} typeof="video/mp4" controls="true"></video>
            </div>
            <p></p>
            <header>
              <h3>Face-to-face Lessons Also Available</h3>
            </header>
            <footer>
              <a href="/adult-courses-french" className="button special">More</a>
            </footer>
            <p></p>
            <header>
              {/* <h3>Adult Courses in French and Spanish</h3> */}
              <h3>Adult Courses in French</h3>
            </header>
            {/* <p>JLH Languages teaches French and Spanish to adults as a type of "brain gym."</p> */}
            <p>JLH Languages teaches French to adults as a type of "brain gym."</p>
            <p>Everyone wants to live a healthy life for longer: there is increasing scientific evidence that suggests that we need to exercise our brain as well as our body. Factors that help to keep our brain in good shape are:</p>
            <ul>
              <li>Education – learning a new skill</li>
              <li>Social engagement – joining a club, meeting with other people</li>
              <li>Cognitive stimulation – reading, puzzles, crosswords</li>
            </ul>
            <p>Learning a foreign language includes all 3 of these elements. In addition, doing something different and fun is also an excellent way of reducing stress.</p>
            <p>According to a Public Health England report in 2016, "Keeping your brain active and challenged throughout life may help reduce your dementia risk."</p>
            <p>We teach languages in an innovative way. Each unit of teaching is based around a conversation (e.g. on food, sport, camping, music) and by the end of each module learners will have mastered the conversation so that they are able to communicate in the target language on that topic.</p>
            <p>If you would like to learn a language from scratch or refresh your knowledge in a fun and friendly environment then get in touch to find the nearest class to you!</p>
            <p>Other services:</p>
            <ul>
              <li>Private tuition for GCSE and A-level examinations</li>
              <li>Intensive one-to-one tuition</li>
              <li>Preparation for French nationality exam (TCF)</li>
              <li>Business French lessons</li>
            </ul>
            <footer>
              <a href="/adult-courses" className="button special">More</a>
            </footer>
          </article>
          <article>
            {/* <header>
              <h3>Immersive Restaurant Experience At Your School From September 2021</h3>
            </header>
            <p>Are you looking for a way to bring French to life? Do you want to improve student motivation and increase uptake at GCSE level and beyond? Do you want to raise the profile of your department within school and in the wider community?</p>
            <p>If the answer to any of these questions is yes, then why not give your students a taste of France without having to leave your school site?</p>
            <p>Having worked for several years as a Head of Department of Modern Languages, I was always looking for a way to bring the languages I taught to life. This is very challenging in a classroom but the alternative, a trip abroad, can be a very time-consuming endeavour and is, sadly, out of the question for many students.</p>
            <p>This is how the idea of the mobile French restaurant experience was born. It gives your students a taste of being in a restaurant abroad without leaving the school site. It offers a fun, effective and hassle-free alternative to a foreign trip.</p> */}

            <header>
              <h3>Immersive Restaurant Experiences</h3>
            </header>
            <p>Are you looking for a way to bring languages to life? Do you want to improve student motivation and increase uptake at GCSE level and beyond? Do you want to raise the profile of your department within your school and in the wider community?</p>
            <p>If the answer to any of these questions is yes, then why not give your students a taste of France or Spain without having to leave the UK?</p>
            <p>Having worked for several years as a Head of Department of Modern Languages, I was always looking for a way to bring the languages I taught to life. This is very challenging in a classroom but the alternative, a trip abroad, can be a very time-consuming endeavour and is, sadly, out of the question for many students.</p>
            <p>This is how the idea of the restaurant experience was born. It gives your students a taste of being in a restaurant abroad. It offers a fun, effective and hassle-free alternative to a foreign trip.</p>

            <footer>
              <div style={{ paddingBottom: '5px' }}>
                <a href="/schools-french" className="button special">At Our Restaurant - French</a>
              </div>
              <div>
                <a href="/schools-spanish" className="button special">At Our Restaurant - Spanish</a>
              </div>
            </footer>
            <p>Our restaurant is located near Cannock in South Staffordshire (WS12 2DN).</p>
            <footer>
              <a href="/schools-french-mobile" className="button special">At Your School - French</a>
            </footer>
            <p>Available to schools within a 30 minute radius of Cannock in South Staffordshire.</p>
            <br></br>
            <br></br>
            <div className="image fit">
              <img src={table} alt=""></img>
            </div>
          </article>
        </div>
      </div>
    </section>
  </Fragment >
);

export default Home;
