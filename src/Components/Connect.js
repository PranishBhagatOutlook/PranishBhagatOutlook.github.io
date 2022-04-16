/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faGoogle,
  fagoogle,
} from "@fortawesome/free-brands-svg-icons";
import { MailIcon } from "react-mail-icon";
function Connect() {
  return (
    <div className="connect_with_me">
      <h1>Connect with me!!!</h1>
      <div className="connect">
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCQYQLM5wUlRdOOWRINuFzPw"
          className="youtube connect"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" target="_blank" />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/pranis.bhagat"
          className="facebook connect"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          target="_blank"
          href="https://www.twitter.com/PranishBhagat"
          className="twitter connect"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/pranish_bhagat"
          className="instagram connect"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/pranish-bhagat-3a1052109/"
          className="linkedin connect"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        <a
          target="_blank"
          href="https://github.com/PranishBhagatOutlook"
          className="github connect"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>

        <a
          target="_blank"
          href="mailto:bhagatpranish@gmail.com?subject=Hello From the website"
          className="github connect"
        >
          <FontAwesomeIcon icon={faGoogle} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Connect;
