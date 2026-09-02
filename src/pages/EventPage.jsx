import { useState } from "react";
import { Link, useParams } from "react-router";
import { create } from "../services/registrations";
import useEvent from "../hooks/useEvent";

export default function EventPage() {
  const { eventId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const {event, loading, error } = useEvent(eventId);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");



  async function handleSubmit(eventSubmit) {
    eventSubmit.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await create({
        name: name.trim(),
        email: email.trim(),
        eventId: event.id,
      });

      setName("");
      setEmail("");
      setSubmitMessage("Tak! Din tilmelding er registreret.");
    } catch (error) {
      console.error(error);
      setSubmitMessage("Tilmeldingen kunne ikke gemmes. Prøv igen.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (loading) {
    return <p>Henter event...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!event) {
    return <p>Event ikke fundet.</p>;
  }

  const date = new Date(event.date);

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
                {date.toLocaleDateString("da-DK", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}{" "}
                kl.{" "}
                {date.toLocaleTimeString("da-DK", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
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

        <section className="signup-panel">
          <div>
            <p className="eyebrow dark">Tilmelding</p>
            <h2>Reserver din plads</h2>
            <p>
              Udfyld formularen, så sender vi din tilmelding til arrangøren.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <label>
              Navn
              <input
                required
                value={name}
                onChange={(inputEvent) => setName(inputEvent.target.value)}
              />
            </label>
            <span>E-mail</span>
            <input
              required
              type="email"
              value={email}
              onChange={(inputEvent) => setEmail(inputEvent.target.value)}
              placeholder="dig@example.com"
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Gemmer..." : "Tilmeld mig"}
            </button>
            {submitMessage && <span role="status">{submitMessage}</span>}
          </form>
        </section>
      </main>
    </>
  );
}
