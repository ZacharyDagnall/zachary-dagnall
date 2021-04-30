import React from "react";

function Contact() {
  return (
    <div id="contact-section">
      <h4>Contact</h4>

      <h6>
        Please visit my{" "}
        <a
          href="https://www.linkedin.com/in/zachary-dagnall/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        to get in touch with me or my{" "}
        <a
          href="https://github.com/ZacharyDagnall"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        to see what I've been working on ! {"😎"}
      </h6>
      <h6>
        <em>
          //download resume{" "}
          {/* <div>
            <div class="download-item">
              <div class="icon">
                <span class="label">Resume</span>
              </div>
              <a
                // class="btn-download"
                // target="_blank"
                // href="../public/robots.txt"
                // href="../public/ZacharyDagnallResume.pdf"
                // onclick="ga('send', 'event', 'PDF', 'Download', 'Resume – PDF Download');"
                download
                // style={{ marginLeft: "20px", marginTop: "0px" }}
              >
                Download
                <i class="far fa-file-pdf"></i>&nbsp;&nbsp;Download 
              </a>
            </div>
          </div> */}
          y medium
          <a href="https://zachary-dagnall.medium.com/"> link</a>
        </em>
      </h6>

      <h6>
        <em>
          <div id="contact-form">
            <form
              method="POST"
              action="https://formspree.io/branysuero@gmail.com"
            >
              <input
                type="hidden"
                name="_subject"
                value="Contact request from personal website"
              ></input>
              <input
                type="email"
                name="_replyto"
                placeholder="Your email"
                required=""
              ></input>
              <textarea
                name="message"
                placeholder="Your message"
                required=""
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </em>
      </h6>
    </div>
  );
}

export default Contact;
