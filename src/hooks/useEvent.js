import { useEffect, useState } from "react";
import { getById } from "../services/events";

export default function useEvent(eventId) {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEvent() {
      try {
        setLoading(true);
        setError("");

        const data = await getById(eventId);

        if (!data) {
          throw new Error("Event ikke fundet.");
        }

        setEvent(data);
      } catch (error) {
        console.error(error);
        setError(
          "Der opstod en fejl under hentning af event. Prøv igen senere.",
        );
      } finally {
        setLoading(false);
      }
    }

    loadEvent();
  }, [eventId]);

  return { event, loading, error };
}
