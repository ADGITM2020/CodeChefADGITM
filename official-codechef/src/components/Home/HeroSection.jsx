import React from 'react'
import heroBg from '../../../public/heroBg.png';
import Image from 'next/image';
import styles from "../../styles/Hero.module.css";
import {getMultiSponsor} from "./Sponsors"
import pastSponsorBg from '../../../public/pastSponsorBg.png';

const HeroSection = () => {
  return (
    <>
      <div className={styles.heromain}>
        <div className={styles.heroleft}>
          <div className={styles.herolefttext1}>Take a look at the <br /> logic in way</div>
          <div className={styles.herolefttext2}>What we Do</div>
          <div className={styles.herolefttext3}>CodeChef ADGITM is a close-knit community of diligent coders who come together and share best practices, new coding accomplishments, and plenty of resources to become the best problem solvers. </div>
          <button className={styles.heroleftbutton}>Get Started</button>
        </div>
        <div className={styles.heroright}>
          <Image
            src="/herobg2.png"
            alt="Picture of the author"
            width={700}
            height={600}
            className={styles.heroImage}
          />
        </div>
      </div>

      <div>
        
      </div>

      <div className={styles.pastSponsorBg} >
        <div className={styles.sponsorSlider}>
          <div className={styles.sponsorSliderTrack}>
            {
              getMultiSponsor()
            }
          </div>
        </div>
        {/* <Image
      src="/pastSponsorBg.png"
      alt="Past Sponsors"
      width={150}
      height={150}
      className={styles.pastSponsorBgImage}
    /> 
    <p className={styles.pastSponsorText}>OUR PAST SPONSORS</p> */}
      </div>

      <div className={styles.detailsPart1}>
        <div className={styles.part1left}>
          <Image
            src="/wework.webp"
            alt="How we work"
            width={400}
            height={400}
            className={styles.detailsImage} />
        </div>
        <div className={styles.part1right}>
          <div className={styles.heading} >
            How we work ?
          </div>
          <div className={styles.text}>
            Codechef ADGITM chapter organises regular contests , hackathons , weekly and monthly meets , sessions with mentors and seniors , all to bring out the best in us and motivate us to aspire high in the future.
          </div>
        </div>
      </div>



      <div className={styles.detailsPart2}>
        <div className={styles.part2left}>
          <div className={styles.heading} >
            Our Goal
          </div>
          <div className={styles.text}>
            To provide students with all the mentorship, resources, and opportunities they need to develop top-notch programming skills and compete on a global scale.
          </div>
        </div>
        <div className={styles.part2right}>
          <Image
            src="/images/Our Goals.png"
            alt="Our Goal"
            width={350}
            height={350}
            className={styles.detailsImage2} />
        </div>
      </div>


      <div className={styles.detailsPart3}>
        <div className={styles.part3left}>
          <Image
            src="/images/Why to join us.png"
            alt="How we work"
            width={350}
            height={350}
            className={styles.detailsImage} />
        </div>
        <div className={styles.part3right}>
          <div className={styles.heading} >
            Why Should you Join Us?
          </div>
          <div className={styles.text}>
            You learn many things, like how to work with a team, how to manage the schedule along with your studies. Also, when you have an event, you have to manage finances, sponsorships, everything. So you learn how to talk to people, approach companies, how to talk to guests, how to deal with your college management [ laugh at the last one.
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection