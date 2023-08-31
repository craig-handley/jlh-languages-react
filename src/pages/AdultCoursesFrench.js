import React, { Fragment } from "react";
import Navigation from './Navigation';
import courses from '../data/courses.json';
import free from '../data/free.json';
import adult_courses_01 from '../img/adult_courses_01.jpg';
import french_flyer from "../img/french_flyer.png";
import general_blurb from "../img/general_blurb.png";

const AdultCoursesFrench = () => {
  return (
    <Fragment>
      <Navigation subpage="subpage"></Navigation>
      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2>French Adult Courses</h2>
          </header>
          {/* <h3 style={{ color: "red" }}>Please email jane@jlhlanguages.org for up-to-date details.</h3> */}
          <h3 style={{ color: "red" }}>New for September 2023! We are re-launching our face-to-face group lessons. Register for our FREE taster session or simply turn up on the day. Please email jane@jlhlanguages.org</h3>
          <div className="flex flex-1">
            <article>
              <header>
                <h3>Free French Taster Sessions</h3>
              </header>
            </article>
          </div>
          <ViewCourses courses={free}></ViewCourses>
          <div className="flex flex-1">
            <article>
              <header>
                <h3>French lessons on Zoom</h3>
              </header>
            </article>
          </div>
          <ViewCourses courses={courses}></ViewCourses>
          <div className="flex flex-1">
            <article>
              {/* <p>* Advanced Conversation: For fluent or near-fluent speakers of French. Come along and chat or discuss the issues of the day.</p> */}
              <p>** Intermediate: For learners with good gramatical knowledge who want to improve their fluency.</p>
              <p>First session free.</p>
            </article>
          </div>
          <div className="image fit smaller-still">
            <img src={adult_courses_01} alt="" className="with-border"></img>
          </div>
          <div className="flex flex-1">
            <article>
              <header>
                <h3>JLH Languages will provide</h3>
              </header>
              <p>A weekly lesson of 60 minutes.</p>
              <p>All materials used during the lesson (material from the lesson is made available after the lesson each week so you can go over anything you want to at your leisure.)</p>
              <p>Regular tips of how to learn and links to useful websites/TV or radio programmes that may be of interest to learners of French.</p>
            </article>

          </div>
          <div className="flex flex-1">
            <article>
              <header>
                <h3>Terms and Conditions</h3>
              </header>
              <p>Zoom group lessons are £13 per 60 minute lesson.</p>
              <p>Face-to-face group lessons are £15 per 60 minute lesson.</p>
              <p>Lessons are purchased in blocks.</p>
              <p>Payment can be made by card, bank transfer or in cash.</p>
            </article>
          </div>
        </div>

        <div className="inner">
          <div className="flex flex-2">
            <article>
              {/* <header>
                <h3>French Adult Courses</h3>
              </header> */}
              <a href="/adult-courses-french">
                <div className="image fit with-border">
                  <img src={french_flyer} alt=""></img>
                </div>
              </a>
              <br></br>
            </article>
          </div>
          <div className="inner">
            <article>
              <div className="image fit smaller with-border">
                <img src={general_blurb} alt=""></img>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const ViewCourses = ({ courses }) => {
  return (
    <div className="table-wrapper">
      <table>
        <ViewTableHeader></ViewTableHeader>
        <ViewTableBody courses={courses}></ViewTableBody>
      </table>
    </div>
  );
};

const ViewTableHeader = () => {
  return (
    <thead className="align-left">
      <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Venue</th>
        <th>Details</th>
      </tr>
    </thead>
  );
};

const ViewTableBody = ({ courses }) => {
  return (
    <tbody className="align-left">
      {
        courses.map(course => (
          <ViewCourse course={course}></ViewCourse>
        ))
      }
    </tbody>
  );
};

const ViewCourse = ({ course }) => {
  return (
    <tr>
      <td>{course.day}</td>
      <td>{course.time}</td>
      <td>{course.location}</td>
      <td>{course.abilityLevel}</td>
    </tr>
  );
};

export default AdultCoursesFrench;