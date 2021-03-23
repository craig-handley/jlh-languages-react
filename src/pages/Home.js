import React, { Fragment } from "react";
import banner from "../img/banner.jpg";
import logo from "../img/jlh-languages.png";
import jh_tv from "../img/jlh_tv.mp4";
import Navigation from './Navigation';

const Home = () => (
  <Fragment>
    <Navigation></Navigation>
    <section id='banner' style={{ backgroundImage: `url(${banner})` }}>
      <img src={logo} style={{ maxWidth: '50%' }} alt=''></img>
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
              <li>Preperation for French nationality exam (TCF)</li>
              <li>Business French lessons</li>
            </ul>
            <footer>
              <a href="/adult-courses" className="button special">More</a>
            </footer>
          </article>
          <article>
            <header>
              <h3>Immersive Restaurant Experience For Schools</h3>
            </header>
            <p>Having worked for several years as a Head of Department of Modern Languages, I was always looking for a way to bring the languages I taught to life. This is very challenging in a classroom but the alternative, a trip abroad, can be a very time-consuming endeavour and is, sadly, out of the question for many students.</p>
            <p>This is the reason why I have teamed up with restaurants in my local area to offer a fun, effective and hassle-free alternative to a foreign trip.</p>
            <p>Our aim is to give students a taste of being in a restaurant abroad whilst remaining in the UK. The restaurants I am currently working with are based in Cannock (South Staffordshire) although I do have plans to expand to other regions.</p>
            <p>We can cater for groups up to a maximum of 30 students. We cater for all dietary requirements (e.g. vegetarians, vegans, food allergies, Halal meals) so that all students can participate fully and benefit from this experience.</p>
            <header>
              <h3>New from September 2021 : Mobile Restaurant Experience</h3>
            </header>
            <p>Benefit from all the advantages of the immersive restaurant experience on your own school site.</p>
            <p>Further details will follow shortly.</p>
            <footer>
              <a href="/schools" className="button special">More</a>
            </footer>
          </article>
        </div>
      </div>
    </section>
  </Fragment>
);

export default Home;
