import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-1 data">
        <h3>About Me</h3>
        <p>
          Do you want to be even more successful? Learn to love learning and
          growth. The more effort you put into improving your skills,
        </p>
        <p>
          Copyright ©2023 All rights reserved | This template is made with{" "}
          <span>Colorlib</span>
        </p>
      </div>
      <div className="footer-2 data">
        <h3>Newsletter</h3>
        <p>Stay updated with our latest trends</p>
        <input placeholder="Enter Email Address" />
        <button>
          <HiArrowNarrowRight />
        </button>
      </div>
      <div className="footer-3 data">
        <h3>Follow Me</h3>
        <p>Let us be social</p>
        <div>
          <span>
            <i>
              <BiLogoFacebook />
            </i>
          </span>
          <span>
            <i>
              <AiOutlineTwitter />
            </i>
          </span>
          <span>
            <i>
              <AiFillInstagram />
            </i>
          </span>
          <span>
            <i>
              <FaLinkedinIn />
            </i>
          </span>
        </div>
      </div>
    </div>
  );
}
