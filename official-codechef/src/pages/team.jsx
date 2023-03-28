import React from "react";
import { Inter } from "next/font/google";
import Depart_Lead from "@/components/Home/Depart_Lead.jsx";
import Image from 'next/image';
import Members from "../members/TeamMembers";

const inter = Inter({ subsets: ["latin"] });
const teamMembers = [
  {
    name: "Himanshu Gupta",
    stack: "Event Lead",
    info: `Events not only allow an engaging experience with the audience but also leaves a lasting impression on the organization... right?✨

    Lets us introduce you to the person who brings every exciting event of society to you. He is a person with great enthusiasm and determination to make every event look just “perfect”.😃🤌🏻
    
    The Event Lead of Codechef ADGITM.... Himanshu Gupta 👏🥳
    `,
    img: "./images/Team/Team_Leads/Himanshu.jpg"
  },
  {
    name: "Aashi Aggarwal",
    stack: "Vice president",
    info: `With great power comes great responsibility…😌

    Presenting to you the person who coordinate events with the president, oversee the internal matters with the leads…😮‍💨the individual who plans, ensures the team meets its targets and help us remain successful. 🥹
    
    Vice President– Aashi Aggarwal✨🌱`,
    img: "./images/Team/Core_Team/Aashi.jpg"
  },
  {
    name: "Hitansh Gupta",
    stack: "General Secretary",
    info: `We all are set to overcome new milestones with a zest to spread out new technical colors…🎉

    Let us introduce you to the person who ensures smooth running of board meetings, brings structure and discipline to our society...🙌🏻
    
    The General Secretary of Codechef ADGITM… Mr. Hitansh Gupta...✨🎉🥳
    `,
    img: "./images/Team/Core_Team/Hitansh.jpg"
  },
  {
    name: "Naman Patel",
    stack: "Video editing Lead",
    info: "lorem ipsum",
    img: "./images/Team/Team_Leads/Naman.jpg"
  },
  {
    name: " Archita Jain",
    stack: "Management Lead",
    info: "lorem ipsum",
    img: "./images/Team/Team_Leads/Archita.jpg"
  },
  {
    name: "Tanisha Bansal",
    stack: "Marketing Lead ",
    info: `With this, give a heartfelt welcome to "Ms. Tanisha Bansal". They are meticulous, tactical, and an excellent communicator who gets the job done.
    💫They keeps themselves on top of budding trends and sees opportunities to capitalize on them 💫`,
    img: "./images/Team/Team_Leads/Tanisha.jpg"
  },
  {
    name: "Armaan Dutt",
    stack: "Technical Lead",
    info: "lorem ipsum",
    img: "./images/Team/Team_Leads/Armaan.jpg"
  },
  {
    name: "Vanshika Goel",
    stack: "Graphics Lead",
    info: "lorem ipsum",
    img: "./images/Team/Team_Leads/Vanshika.png"
  },
  {
    name: "Alokita Vij",
    stack: "Content Lead",
    info:  `With great power comes great responsibility…😌

    Presenting to you the person who coordinate events with the president, oversee the internal matters with the leads…😮‍💨the individual who plans, ensures the team meets its targets and help us remain successful. 🥹
    
    Vice President– Aashi Aggarwal✨🌱`,
    img: "./images/Team/Team_Leads/Alokita.jpg"
  },
  {
    name: "Ansh Sachdeva",
    stack: "Media Outreach head",
    info:  `With great power comes great responsibility…😌

    Presenting to you the person who coordinate events with the president, oversee the internal matters with the leads…😮‍💨the individual who plans, ensures the team meets its targets and help us remain successful. 🥹
    
    Vice President– Aashi Aggarwal✨🌱`,
    img: "./images/Team/Core_Team/Ansh.jpg"
  },
];

const ManagementPage = () => {
  return(
  <>
  <Members 
    leader_name = "Kartikey Gupta" 
    leader_info="Leaders are those who keep a vision empower others...💫
    One such leader you should definitely know is a person who started his journey being a member of CodeChef family and with his knack of dealing with every kind of situation, problem and situation, he empowers every one of us..
    
    Please give a round of applause to the president of *Codechef ADGITM* ... *Kartikey Gupta* 👏🏻🤩" 
    leader_tech_stack="DSA" 
    leader_img_location="./images/Team/Core_Team/Kartikey.jpg" 
    members={teamMembers} />
</>
)
};

export default ManagementPage;
