import React, { useState, useEffect } from "react";
import styles from "../../styles/PastEvents.module.css";
import DsaCarnival from "../../../public/images/Events/DsaCarnival.jpg";
import LiveTheCode from "../../../public/images/Events/LiveTheCodeHackathon.jpg";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
import { pastEventsData } from "../../data/pastEventsData";
const PastEvents = () => {
  let [activeIndex, setActiveIndex] = useState(0);
  let [color1, setColor1] = useState("#21658C");
  let [color2, setColor2] = useState("#bdbbbb");
  // change activeIndex after every 2 seconds using setInterval
  // setInterval(() => {
  //   if (activeIndex === pastEventsData.length - 2) {
  //     setActiveIndex(0);
  //   } else {
  //     setActiveIndex((prev) => prev + 2);
  //   }
  // }, 2000);

  const handlePrevious = () => {
    if (activeIndex === 0) {
      setActiveIndex(pastEventsData.length - 2);
    } else {
      setActiveIndex((prev) => prev - 2);
    }
    setColor1("#15374a");
    setTimeout(() => {
      setColor1("#21658C");
    },20);
  };
  const handleNext = () => {
    if (activeIndex === pastEventsData.length - 2) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => prev + 2);
    }
    // change color of BsFillArrowRightCircleFill for two seconds
    setColor2("#656262");
    setTimeout(() => {
      setColor2("#bdbbbb");
    },20);
    
  };
  return (
    <div>
      <div className={styles.main} id="past-events">
        <div className={styles.heading}>
          <h1>Our Past Events</h1>
        </div>
        <div className={styles.Container}>
          <div className={styles.Events}>
            <Image
              style={{ marginTop: "-7px" }}
              src={pastEventsData[activeIndex].image}
              width={400}
            />
            <div className={styles.belowCard}>
              {pastEventsData[activeIndex].date}
            </div>
          </div>
          <div className={styles.Events}>
            <Image
              style={{ marginTop: "-7px" }}
              src={pastEventsData[activeIndex + 1].image}
              width={400}
            />
            <div className={styles.belowCard}>
              {pastEventsData[activeIndex + 1].date}
            </div>
          </div>
          <div className={styles.RightContent}>
            <div className={styles.TopDot}>
              {
                activeIndex === 0 ?(
                  <>
                    <RxDotFilled color="#21658C" size={30} />
                    <RxDotFilled color="#d9d9d9" size={30} />
                    <RxDotFilled color="#d9d9d9" size={30} />
                  </>
                ):(
                <></>
                )
              }
              {
                activeIndex === 2 ?(
                  <>
                    <RxDotFilled color="#d9d9d9" size={30} />
                    <RxDotFilled color="#21658C" size={30} />
                    <RxDotFilled color="#d9d9d9" size={30} />
                  </>
                ):(
                <></>
                )
              }
              {
                activeIndex === 4 ?(
                  <>
                    <RxDotFilled color="#d9d9d9" size={30} />
                    <RxDotFilled color="#d9d9d9" size={30} />
                    <RxDotFilled color="#21658C" size={30} />
                  </>
                ):(
                <></>
                )
              }

            </div>
            <div className={styles.Text}>
              Our society is tirelessly working towards building quality coders.
              We have organised various successful events in past.
            </div>
            <div className={styles.BottomIcon}>
              <BsFillArrowLeftCircleFill
                color={color1}
                size={35}
                onClick={handlePrevious}
                style={{ cursor: "pointer" }}
              />
              <BsFillArrowRightCircleFill
                color={color2}
                size={35}
                onClick={handleNext}
                style={{ cursor: "pointer", }}
                className={styles.RightIcon}
              />
            </div>

            <div className={styles.BelowBorder}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
