import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

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
    <div className="event-page">
      <h1>{content.title}</h1>
      <h2>{content.preview}</h2>
      {/*dangerouslySetInnerHTML displays the content (a html string) as actual html*/}
      <div dangerouslySetInnerHTML={{__html: content.content}} />
      <Link className="link-button" to="book">Book Tickets</Link>
    </div>
  )
};