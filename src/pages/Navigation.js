import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ subpage }) => {
  return (
    <div id="top" className={subpage}>
      {/* header */}
      <header id="header">
        <div className="inner">
          <nav id="nav">
            <Link to="/">Home</Link>
            <Link to="/adult-courses">Adult Courses</Link>
            <Link to="/tutoring">Tutoring</Link>
            <Link to="/schools">Schools</Link>
            {/* <Link to="/events">Events</Link> */}
            <Link to="/about">About</Link>
            <Link to="/testimonials">Testimonials</Link>
            {/* <Link to="/gift-vouchers">Gift Vouchers</Link> */}
            <Link to="/privacy">Privacy</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">How To Book</Link>
          </nav>
          <a href="#navPanel" className="navPanelToggle">
            <span className="fas fa-bars"></span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navigation;