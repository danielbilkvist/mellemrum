import { Link, useParams } from "react-router";
import useEvent from "../hooks/useEvent";
import EventDetails from "../components/EventDetails";
import Registration from "../components/Registration";


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

        <EventDetails event={event} />

        <Registration event={event} />

      </main>
    </>
  );
}
