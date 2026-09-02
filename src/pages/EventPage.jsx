import { Link, useParams } from "react-router";
import useEvent from "../hooks/useEvent";
import Registration from "../components/Registration";
import { formatEventDate } from "../utils/formatDate";
import { formatEventTime } from "../utils/formatDate";

export default function EventPage() {
  const { eventId } = useParams();

  const {event, loading, error } = useEvent(eventId);

  if (loading) {
    return <p>Henter event...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!event) {
    return <p>Event ikke fundet.</p>;
  }

  return (
    <>
      <main className="event-page">
        <Link className="back-link" to="/">
          ← Alle events
        </Link>

        <section className="event-detail">
          <img src={event.image} alt="" />
          <div className="event-detail-content">
            <p className="event-category">{event.category}</p>
            <h1>{event.title}</h1>
            <p className="lead">{event.summary}</p>
            <div className="detail-list">
              <p>
                <strong>Dato</strong>
                {formatEventDate(event.date)}{" "}
                kl.{" "}
                {formatEventTime(event.date)}
              </p>
              <p>
                <strong>Sted</strong>
                <span>
                  {event.venue.name}
                  <br />
                  {event.venue.address}, {event.venue.postalCode}{" "}
                  {event.venue.city}
                  {event.venue.website && (
                    <>
                      <br />
                      <a href={event.venue.website}>Besøg venue</a>
                    </>
                  )}
                </span>
              </p>
              <p>
                <strong>Pris</strong>
                {event.price === 0 ? "Gratis" : `${event.price} kr.`}
              </p>
            </div>
            <p>{event.description}</p>
          </div>
        </section>

        <Registration event={event} />

      </main>
    </>
  );
}
