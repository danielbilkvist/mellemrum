import { useEffect, useState } from "react";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json",
};

export default function useEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getEvents() {
      try {
        setLoading(true);
        setError("");
        
      const query = "select=*,venue:venues(*)";

      const response = await fetch(`${SUPABASE_URL}/events?order=date.asc&${query}`, { headers });
      if (!response.ok) {
        throw new Error("Siden kunne ikke hente events.");
      }
      const data = await response.json();
      setEvents(data);
      } catch (error) {
        console.error(error);

      setError("Der opstod en fejl under hentning af events. Prøv igen senere.");
      } finally {
        setLoading(false);
      }
    }

    getEvents();
  }, []);
  return { events, loading, error };
}
