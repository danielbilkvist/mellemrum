import { useEffect, useState } from "react";
import { Link } from "react-router";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json"
};

export default function RegistrationsPage() {
  const [registrations, setRegistrations] = useState([]);
  const [registrationCount, setRegistrationCount] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getRegistrations() {
      try {
        setLoading(true);
        setError("");

      const query = "select=*,event:events(*)";

      const response = await fetch(`${SUPABASE_URL}/registrations?order=createdAt.desc&${query}`, { headers });

      if (!response.ok) {
        throw new Error("Siden kunne ikke hente tilmeldinger.");
      }

      const data = await response.json();
      setRegistrations(data);
      setRegistrationCount(data.length);
    } catch (error) {
      console.error(error);
      setError("Der opstod en fejl under hentning af tilmeldinger. Prøv igen senere.");
    }
      finally {
        setLoading(false);
      }
    }

    getRegistrations();
  }, []);

  return (
    <>
      <header className="admin-header">
        <p className="eyebrow">Internt overblik</p>
        <h1>Tilmeldinger</h1>
        <p>{registrationCount} tilmeldinger i alt</p>
      </header>
      <main>

        {loading && <p>Henter tilmeldinger...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && (
        <div className="registration-list">
          <div className="registration-row registration-labels">
            <span>Navn</span>
            <span>Event</span>
            <span>Dato</span>
            <span>Status</span>
          </div>
          {registrations.map((registration) => (
            <div className="registration-row" key={registration.id}>
              <div>
                <strong>{registration.name}</strong>
                <small>{registration.email}</small>
              </div>
              <span>{registration.event.title}</span>
              <span>{new Date(registration.event.date).toLocaleDateString("da-DK")}</span>
              <span className="status">{registration.status}</span>
            </div>
          ))}
        </div>
        )}
      </main>
    </>
  );
}
