import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import AdultCourses from "./pages/AdultCourses";
import AdultCoursesFrench from "./pages/AdultCoursesFrench";
import AdultCoursesSpanish from "./pages/AdultCoursesSpanish";
import Tutoring from "./pages/Tutoring";
import Schools from "./pages/Schools";
import SchoolsLanding from "./pages/SchoolsLanding";
import SchoolsFrenchLanding from "./pages/SchoolsFrenchLanding";
import SchoolsSpanishLanding from "./pages/SchoolsSpanishLanding";
import SchoolsFrenchMobile from "./pages/SchoolsFrenchMobile";
import SchoolsSpanishRestaurant from "./pages/SchoolsSpanishRestaurant";
import SchoolsFrenchRestaurant from "./pages/SchoolsFrenchRestaurant";
import SchoolsSpanish from "./pages/SchoolsSpanish";
import Events from "./pages/Events";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import GiftVouchers from "./pages/GiftVouchers";
import Privacy from "./pages/Privacy";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/adult-courses"><AdultCoursesFrench /></Route>
        {/* <Route exact path="/adult-courses"><AdultCourses /></Route>
        <Route exact path="/adult-courses-french"><AdultCoursesFrench /></Route>
        <Route exact path="/adult-courses-spanish"><AdultCoursesSpanish /></Route> */}
        <Route exact path="/tutoring"><Tutoring /></Route>
        <Route exact path="/schools"><SchoolsLanding /></Route>
        {/* <Route exact path="/schools"><Schools /></Route> */}
        <Route exact path="/schools-french"><SchoolsFrenchLanding /></Route>
        <Route exact path="/schools-french-restaurant"><SchoolsFrenchRestaurant /></Route>
        <Route exact path="/schools-french-mobile"><SchoolsFrenchMobile /></Route>
        <Route exact path="/schools-spanish"><SchoolsSpanishRestaurant /></Route>
        <Route exact path="/events"><Events /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/testimonials"><Testimonials /></Route>
        <Route exact path="/gift-vouchers"><GiftVouchers /></Route>
        <Route exact path="/privacy"><Privacy /></Route>
        <Route exact path="/gallery"><Gallery /></Route>
        <Route exact path="/contact"><Contact /></Route>
      </Switch>
      <footer id="footer">
        <div className="inner">
          <div className="flex">
            <div className="copyright">
              <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">
                <img alt="Creative Commons License" style={{ borderWidth: 0 }} src="https://i.creativecommons.org/l/by/3.0/80x15.png"></img>
              </a>
              <br></br>
              <div>
                This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported License</a>
              </div>
            </div>
            <ul className="icons">
              <li><a target="_blank" rel="noreferrer" className="icon fab fa-facebook-square" href="https://www.facebook.com/JLHLanguages/"><span className="footer-text">Find us on Facebook</span></a></li>
              <li><a target="_blank" rel="noreferrer" className="icon fas fa-envelope" href="mailto:jane@jlhlanguages.org"><span className="footer-text">jane@jlhlanguages.org</span></a></li>
              <li className="icon fas fa-phone-square" style={{ color: '#5385c1' }}><span className="footer-text">07793 556020</span></li>
            </ul>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default App;