import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { convertDate } from "./helpers";

import calender from "../assets/calender.png";
import twitterIcon from "../assets/ico_twitter.png";
import fbIcon from "../assets/ico_facebook.png";
import whatsappIcon from "../assets/ico_whatsapp.png";
import emailIcon from "../assets/ico_email.png";

export default function EventPage() {
  const params = useParams();
  const [content, setContent] = useState([]);
  useEffect(() => {
    async function getEventContent() {
      const response = await fetch(`http://localhost:5000/events/${params.id}`)
      if (!response.ok) {
        window.alert(`An error occurred: ${response.statusText}`);
        return;
      }
      const event = await response.json()
      setContent(event);
    }
    getEventContent();
    return;
    // dependency below causes an update when number of events changes
  }, [params.id]);

  return (
    <div className="event-page laptop-center">
      <h1>{content.title}</h1>
      <img src={content.img_url} alt="event thumbnail" className="eventThumbnail" />
      <h2>{content.preview}</h2>
      <p><span><img src={calender} alt="calender icon" /></span>{convertDate(content.start_date)} - {convertDate(content.end_date)}</p>
      <Link className="link-button" to="book">Book Tickets</Link>
      {/*dangerouslySetInnerHTML displays the content (a html string) as actual html*/}
      <div dangerouslySetInnerHTML={{__html: content.content}} />
      <h3>Share</h3>
      <ul>
        <li>
          <a href={"http://twitter.com/intent/tweet?text="+ content.title +"&url=" + window.location.href} target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="twitter icon" className="social-media-link"/>
          </a>
        </li>
        <li>
          <a href={"https://facebook.com/sharer/sharer.php?u="+ window.location.href} target="_blank" rel="noreferrer">
            <img src={fbIcon} alt="facebook icon" className="social-media-link"/>
          </a>
        </li>
        <li>
          <a href={"whatsapp://send?text=" + window.location.href} target="_blank" rel="noreferrer">
            <img src={whatsappIcon} alt="whatsapp icon" className="social-media-link"/>
          </a>
        </li>
        <li>
          {/* Facebook share link does not work with links to localhost, it should work as intended once deployed */}
          <a href={"mailto:?subject=" + content.title + "&body=" + window.location.href} target="_blank" rel="noreferrer">
            <img src={emailIcon} alt="email icon" className="social-media-link"/>
          </a>
        </li>
      </ul>
    </div>
  )
};