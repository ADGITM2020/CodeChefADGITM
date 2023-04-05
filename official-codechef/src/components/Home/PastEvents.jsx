import React,{useState,useEffect} from "react";
import styles from "../../styles/PastEvents.module.css";
import DsaCarnival from "../../../public/images/Events/DsaCarnival.jpg";
import LiveTheCode from "../../../public/images/Events/LiveTheCodeHackathon.jpg"
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
import { pastEventsData } from "../../data/pastEventsData";
const PastEvents = () => {
  let[activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setInterval=(() =>{
      if(activeIndex = data.length - 2){
        setActiveIndex(0)
      }
      else {
        setActiveIndex((prev) => prev + 2)
      }
    },2000);
  }, []);
     const handlePrevious = () => {
    if (activeIndex === 0) {
      setActiveIndex(pastEventsData.length - 2);
    } else {
      setActiveIndex((prev)=> prev - 2);
    }
  };
  const handleNext = () => {
    if (activeIndex === pastEventsData.length - 2) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev)=> prev + 2);
    }

    // also change the color of the dot
    // const newColor = color.map((item, index) => {
    //   if (index === 2) {
    //     return styles.dot;
    //   } else {
    //     return styles.dot;
    //   }
    // }
    // );
    // setColor(newColor);

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
            <div className={styles.belowCard}>{pastEventsData[activeIndex].date}</div>
          </div>
          <div className={styles.Events}>
            <Image
              style={{ marginTop: "-7px" }}
              src={pastEventsData[activeIndex+1].image}
              width={400}
            />
            <div className={styles.belowCard}>{pastEventsData[activeIndex+1].date}</div>
          </div>
          <div className={styles.RightContent}>
            <div className={styles.TopDot}>
              <RxDotFilled color="#D9D9D9" size={30} />
              <RxDotFilled color="#D9D9D9" size={30} />
              <RxDotFilled color="#21658C" size={30} />
              <RxDotFilled color="#D9D9D9" size={30} />
              <RxDotFilled color="#D9D9D9" size={30} />
            </div>
            <div className={styles.Text}>
              Our society is tirelessly working towards building quality coders. We have organised various successful events in past.
            </div>
            <div className={styles.BottomIcon}>
            <BsFillArrowLeftCircleFill color="#3A8CBB" size={35} onClick={handlePrevious} style={{cursor:"pointer"}} />
            <BsFillArrowRightCircleFill color="#979797" size={35} onClick={handleNext} style={{cursor:"pointer"}}/>     
            </div>

            <div className={styles.BelowBorder}>--</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
