import { useState } from "react";
import { create } from "../services/registrations";
import style from "./Registration.module.css";

export default function Registration({ event }) {
const [name, setName] = useState("");
const [email, setEmail] = useState("");

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

  return (
    <section className={style.registration}>
      <div>
        <p className="eyebrow dark">Tilmelding</p>
        <h2>Reserver din plads</h2>
        <p>Udfyld formularen, så sender vi din tilmelding til arrangøren.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <span>Navn</span>
        <label>
          <input
            className={style.input}
            required
            value={name}
            onChange={(inputEvent) => setName(inputEvent.target.value)}
            placeholder="Dit navn"
          />
        </label>
        <span>E-mail</span>
        <input
          className={style.input}
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
  );
        }