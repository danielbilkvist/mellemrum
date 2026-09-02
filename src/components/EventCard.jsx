import { Link } from "react-router";
import { formatEventDate } from "../utils/formatDate";

export default function EventCard({ event }) {
    return (
        <article className="event-card" key={event.id}>
              <img src={event.image} alt="" />
              <div className="event-card-content">
                <p className="event-category">{event.category}</p>
                <h3>{event.title}</h3>
                <p>{event.summary}</p>
                <div className="event-meta">
                  <span>{formatEventDate(event.date)}</span>
                  <span>{event.venue.name}</span>
                </div>
                <Link className="card-link" to={`/events/${event.id}`}>
                  Læs mere
                </Link>
              </div>
            </article>
    );
}