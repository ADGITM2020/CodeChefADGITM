import React from "react";
import styles from "../../styles/PastEvents.module.css";
import DsaCarnival from "../../../public/images/Events/DsaCarnival.jpg";
import LiveTheCode from "../../../public/images/Events/LiveTheCodeHackathon.jpg"

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import Image from "next/image";

const PastEvents = () => {
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
              src={DsaCarnival}
              width={400}
            />
            <div className={styles.belowCard}>Mon 16</div>
          </div>
          <div className={styles.Events}>
            <Image
              style={{ marginTop: "-7px" }}
              src={LiveTheCode}
              width={400}
            />
            <div className={styles.belowCard}>Mon 16</div>
          </div>
          <div className={styles.RightContent}>
            {/* <div className={styles.TopDot}>
              <RxDotFilled color="#D9D9D9" size={30} />
              <RxDotFilled color="#D9D9D9" size={30} />
              <RxDotFilled color="#21658C" size={30} />
              <RxDotFilled color="#D9D9D9" size={30} />
              <RxDotFilled color="#D9D9D9" size={30} />
            </div> */}
            <div className={styles.Text}>
              Our society is tirelessly working towards building quality coders. We have organised various successful events in past.
            </div>
            {/* <div className={styles.BottomIcon}>
              <BsFillArrowLeftCircleFill color="#3A8CBB" size={30} />
              <BsFillArrowRightCircleFill color="#979797" size={30} />
            </div> */}
            <div className={styles.BelowBorder}>--</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
