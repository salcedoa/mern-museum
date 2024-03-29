import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import calender from "../assets/calender.png";
import { convertDate } from "../components/helpers";

// component of a specific event box
const Event = (props) => {
  return (
  <Link to={`/events/${props.event._id}`}>
    <div className="eventBox">
      <img src={props.event.img_url} alt="event thumbnail" className="eventThumbnail" />
      <div className="eventBoxInfo">
        <p><span><img src={calender} alt="calender icon" /></span>{convertDate(props.event.start_date)} - {convertDate(props.event.end_date)}</p>
        <h2>{props.event.title}</h2>
        <h4>{props.event.preview}</h4>
      </div>
    </div>
  </Link>
)};

// returns a list of event components
export default function EventList(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEvents() {
      const response = await fetch(`http://localhost:5000/events/`)
      if (!response.ok) {
        window.alert(`An error occurred: ${response.statusText}`);
        return;
      }
      const events = await response.json()
      setEvents(events);
    }
    getEvents();
    return;
    // dependency below causes an update when number of events changes
  }, [events.length]);

  function eventList() {
    // if prop full is set to false, it will only return the first 2 events
    return (props.full ? events : events.slice(0,2)).map((event) => {
      return (
        <Event
          event={event}
          key={event._id}
        />
      );
    });
  }

  return (
    <>{eventList()}</>
  )

}