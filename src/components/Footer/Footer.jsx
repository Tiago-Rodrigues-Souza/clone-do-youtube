import React from "react";

import profile from "../../assets/profile.jpeg";

import "./Footer.css";

import { GrHomeRounded } from "react-icons/gr";
import { SiYoutubeshorts } from "react-icons/si";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";

function Footer() {
  return (
    <footer>
      <div>
        <GrHomeRounded />
        <span>Home</span>
      </div>
      <div>
        <SiYoutubeshorts />
        <span>Shorts</span>
      </div>
      <div >
        <IoIosAddCircleOutline className='add'/>
      </div>
      <div>
        <MdOutlineSubscriptions />
        <span>Subscriptions</span>
      </div>

      <div>
        <img  src={profile} alt="" />
        <span>You</span>
      </div>
    </footer>
  );
}

export default Footer;
