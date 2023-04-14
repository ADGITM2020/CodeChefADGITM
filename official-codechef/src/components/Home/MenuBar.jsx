import React from "react";
import styles from "../../styles/MenuBar.module.css";

const MenuBar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.Container}>
        <div><a href="#about">About</a></div>
        <div><a href="#departments">Departments</a></div>
        <div><a href="team">Our Team</a></div>
        <div><a href="#events">Events</a></div>
        {/* <div><a href="#past-events">Past Events</a></div>
        <div><a href="#upcoming-events">Upcoming Events</a></div> */}
        <div><a href="#contact-us">Contact Us</a></div>
      </div>
    </div>
  );
};

export default MenuBar;
