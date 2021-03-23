import React, { Fragment } from "react";
import Navigation from './Navigation';
// import courses from '../data/courses.json';
import adult_courses_01 from '../img/adult_courses_01.jpg';

const AdultCoursesSpanish = () => {
  return (
    <Fragment>
      <Navigation subpage="subpage"></Navigation>
      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2>Spanish Adult Courses</h2>
          </header>
          <h3 style={{ color: "red" }}>
            <p>We are currently in the process of setting up our Spanish classes. For more information and to express an interest in these lessons please get in touch at:</p>
            <p>fliss@jlhlanguages.org / 07967 653035.</p>
            <p>Face-to-face or Zoom lessons are scheduled to begin from September 2020.</p>
          </h3>
          {/* <div className="flex flex-1">
            <article>
              <header>
                <h3>Spanish lessons on Zoom</h3>
              </header>
            </article>
          </div>
          <ViewCourses courses={courses}></ViewCourses>
          <div className="flex flex-1">
            <article>
              <p>* Advanced Conversation: For fluent or near-fluent speakers of Spanish. Come along and chat or discuss the issues of the day.</p>
              <p>** Intermediate: For learners with good gramatical knowledge who want to improve their fluency.</p>
              <p>First session free.</p>
              <p>More classes starting Autumn 2020, contact Jane for details.</p>
            </article>
          </div> */}
          <div className="image fit smaller-still">
            <img src={adult_courses_01} alt="" className="with-border"></img>
          </div>
          <div className="flex flex-1">
            <article>
              <header>
                <h3>JLH Languages will provide</h3>
              </header>
              <p>A weekly lesson of 60 minutes.</p>
              <p>All materials used during the lesson (material from the lesson is e-mailed out after the lesson each week so you can go over anything you want to at your leisure.)</p>
              <p>Regular tips of how to learn and links to useful websites/TV or radio programmes that may be of interest to learners of Spanish.</p>
            </article>

          </div>
          <div className="flex flex-1">
            <article>
              <header>
                <h3>Terms and Conditions</h3>
              </header>
              <p>Lesson are purchased in blocks: 3 lessons for £45 or 5 lessons for £65.</p>
              <p>The client needs to give at least 1 week’s notice if the client cannot attend a lesson due to a foreseeable event (e.g. hospital appointment.) Full payment will not be taken for that lesson as long as the client gives at least 1 week’s notice.</p>
              <p>However, the client will be charged £4 for the resources related to the missed lesson that are e-mailed out.</p>
              <p>Payment can be made by card, bank transfer or in cash.</p>
            </article>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

// const ViewCourses = ({ courses }) => {
//   return (
//     <div className="table-wrapper">
//       <table>
//         <ViewTableHeader></ViewTableHeader>
//         <ViewTableBody courses={courses}></ViewTableBody>
//       </table>
//     </div>
//   );
// };

// const ViewTableHeader = () => {
//   return (
//     <thead className="align-left">
//       <tr>
//         <th>Date</th>
//         <th>Time</th>
//         <th>Venue</th>
//         <th>Details</th>
//       </tr>
//     </thead>
//   );
// };

// const ViewTableBody = ({ courses }) => {
//   return (
//     <tbody className="align-left">
//       {
//         courses.map(course => (
//           <ViewCourse course={course}></ViewCourse>
//         ))
//       }
//     </tbody>
//   );
// };

// const ViewCourse = ({ course }) => {
//   return (
//     <tr>
//       <td>{course.day}</td>
//       <td>{course.time}</td>
//       <td>{course.location}</td>
//       <td>{course.abilityLevel}</td>
//     </tr>
//   );
// };

export default AdultCoursesSpanish;