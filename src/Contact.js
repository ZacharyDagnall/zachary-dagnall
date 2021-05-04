import React from "react";

function Contact() {
  return (
    <div id="contact-section">
      <h4>Contact</h4>

      <h5>
        Visit my{" "}
        <a
          href="https://github.com/ZacharyDagnall"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {" or "}
        <a
          href="https://zachary-dagnall.medium.com/"
          target="_blank"
          rel="noreferrer"
        >
          Medium
        </a>{" "}
        to see what I've been working on ! {"😎"}
      </h5>
      {/*<h5>
        Download my{" "}
        <span class="download-item">
          <a
            // class="btn-download"
            // target="_blank"
            // href="../public/robots.txt"
            href="./ZacharyDagnallResume.pdf"
            // onclick="ga('send', 'event', 'PDF', 'Download', 'Resume – PDF Download');"
            download
            // style={{ marginLeft: "20px", marginTop: "0px" }}
          >
            Resumé
          </a>
          {"."}
        </span>
      </h5>*/}

      <h5>
        To get in touch with me, visit my{" "}
        <a
          href="https://www.linkedin.com/in/zachary-dagnall/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        or send me an email:
        <form
          method="POST"
          action="https://formspree.io/f/xrgreyea"
          id="contact-form"
        >
          <input
            type="hidden"
            name="_subject"
            value="contact request from personal website"
            className="contact-piece"
          ></input>
          <input
            type="email"
            name="_replyto"
            placeholder="Your email"
            required=""
            className="contact-piece"
          ></input>
          <textarea
            name="message"
            placeholder="Your message"
            required=""
            className="contact-piece"
          ></textarea>
          <input
            type="submit"
            value="Send!"
            className="contact-piece"
            id="send-email-button"
          ></input>
        </form>
      </h5>
    </div>
  );
}

export default Contact;
