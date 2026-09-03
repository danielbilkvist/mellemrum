import { useEffect, useState } from "react";
import { getAll } from "../services/events";

export default function useEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEvents() {
      try {
        setLoading(true);
        setError("");

        const data = await getAll();
        setEvents(data);
      } catch (error) {
        console.error(error);

        setError(
          "Der opstod en fejl under hentning af events. Prøv igen senere.",
        );
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);
  return { events, loading, error };
}
