import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// component of a specific event box
const Event = (props) => {
  
  // converts date from UTC date time to custom format
  const convertDate = (date) => {
    let rawDate = new Date(date);
    return`${rawDate.getDate()} ${rawDate.toLocaleString('default', { month: 'short' })} ${rawDate.getFullYear()}`;
  }

  return (
  <Link to={`/events/${props.event._id}`}>
    <div className="eventBox">
      <h2>{props.event.title}</h2>
      <img src={props.event.img_url} alt="event thumbnail" />
      <h4>{props.event.preview}</h4>
      <p>{convertDate(props.event.start_date)} - {convertDate(props.event.end_date)}</p>
    </div>
  </Link>
)};

// returns a list of event components
export default function EventList() {
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
    return events.map((event) => {
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