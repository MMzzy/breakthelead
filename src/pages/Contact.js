/*import { useState, useEffect } from "react";
import Loader from "../components/Loader";

const Contact = () => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      fetch('https://front2.edukacija.online/backend/wp-json/wp/v2/pages/1102')
      .then(response => response.json())
      .then(
        (data) => {
          setPage(data);
          console.log(data)
        }
      )
      .finally(() => setLoading(false));
    },[]
  )
  return (
    <>
      {loading && <Loader/>}
      {!loading && page && (
        <div dangerouslySetInnerHTML={{__html: page.content.rendered}}></div>
      )}
      <h1>helloo</h1>
    </>
  );
};

export default Contact;*/

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./contact.css";


const Contact = () => {
  const form = useRef ()
  const [isSent, setIsSent] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_dtl6q6i",
      "template_2tttz68",
      form.current,
      "Ssqf083y22sUGq5gO"
    ).then(
      () => {
        console.log("SUCCESS!");
        setIsSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };


  return (
    <>
      <section id="contact" style={isMobile ?  {backgroundImage: "url('/img/cetiri_limenke_zgnjecene.png')"} : {}}>
        <div className="container-fluid">
          <div className="row my-4">
            <div className="col-md-6 contact-left">
              <div className="contact-info">
                <h2>Contact channels</h2>
                <div className="contact-socials">
                  <a href="" className="d-flex gap-4 align-items-start">
                    <FontAwesomeIcon icon={faAt} className="pt-1"/> breaktheleads@gmail.com
                  </a>
                  <a href="" className="d-flex gap-4 align-items-start">
                    <FontAwesomeIcon icon={faFacebook} className="pt-1"/> BreakTheLeads
                  </a>
                  <a href="" className="d-flex gap-4 align-items-start">
                    <FontAwesomeIcon icon={faInstagram} className="pt-1"/> break_the_leads
                  </a>
                </div>
                <div className="d-flex flex-column contact-input">
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="d-flex flex-column"
                  >
                  <label>Name</label>
                  <input type="text" name="user_name" className="inputform" />
                  <label>Email</label>
                  <input type="email" name="user_email" className="inputform"/>
                  <label>Firm name</label>
                  <input type="text" name="user_work" className="inputform"/>
                  <label>Message</label>
                  <input type="text" name="message" className="inputform"/>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 contact-right">
              <div className="contact-slika">
                <img src="/img/cetiri_limenke_zgnjecene.png"/>
              </div>
            </div>
          </div>
        </div>
      </section>    
    </>
  )
}

export default Contact; 