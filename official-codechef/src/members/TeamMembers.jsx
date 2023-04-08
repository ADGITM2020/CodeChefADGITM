import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import styles from "../styles/Members.module.css";
import Link from "next/link";

const Leader = ({ leader_member_name, leader_tech_stack, leader_info }) => {
  return (
    <div className={styles.Leader_info}>
      <div className={styles.leader_heading}>
        <h3>{leader_member_name}</h3>
        <p>{leader_tech_stack}</p>
      </div>

      <p className={styles.teamInfo}>{leader_info}</p>

      <div className={styles.socialLinks}>
        <Link href="/">
          <FaLinkedinIn />
        </Link>
        <Link href="/">
          <AiFillGithub />
        </Link>
        <Link href="/">
          <AiFillInstagram />
        </Link>
      </div>
    </div>
  );
};

const Member = ({
  team_member_name,
  tech_stack,
  team_info,
  linkedin_link,
  github_link,
  insta_link,
}) => {
  return (
    <div className={styles.info}>
      <div className={styles.heading}>
        <h3>{team_member_name}</h3>
        <p>{tech_stack}</p>
      </div>

      <p className={styles.teamInfo}>{team_info}</p>

      <div className={styles.socialLinks}>
        <Link href="/">
          <FaLinkedinIn />
        </Link>
        <Link href="/">
          <AiFillGithub />
        </Link>
        <Link href="/">
          <AiFillInstagram />
        </Link>
      </div>
    </div>
  );
};

const Members = ({
  leader_name,
  leader_info,
  leader_tech_stack,
  leader_img_location,
  members,
}) => {
  return (
    <div className={styles.Teampage}>
      <div className={styles.leader_grid}>
        <div className={styles.leader_information}>
          {/* <img src={leader_img_location} className={styles.leader_img}/> */}
          <div
            className={styles.leader_img}
            style={{
              backgroundImage: `url(${leader_img_location})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <Leader
            leader_member_name={leader_name}
            leader_info={leader_info}
            leader_tech_stack={leader_tech_stack}
          />
        </div>
      </div>

      <div className={styles.grid}>
        {members.map((member, index) => (
          <div key={index} className={styles.member_information}>
            {/* <img src={member.img} alt={member.name} className={styles.member_img}/> */}
            <div
              className={styles.member_img}
              style={{
                backgroundImage: `url(${member.img})`,
              }}
            />

            <Member
              team_member_name={member.name}
              tech_stack={member.stack}
              team_info={member.info}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Members;
