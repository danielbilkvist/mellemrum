import {useEffect, useState} from "react";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json",
};

export default function useEvent(eventId) {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
      async function getEvent() {
          try {
            setLoading(true);
            setError("");
            
        const query = "select=*,venue:venues(*)";
  
        const response = await fetch(
        `${SUPABASE_URL}/events?id=eq.${eventId}&${query}`,
        { headers },
        );
  
        if (!response.ok) {
          throw new Error("Siden kunne ikke hente event.");
        }
  
        const data = await response.json();
  
        if (data.length === 0) {
          throw new Error("Event ikke fundet.");
        }
  
        setEvent(data[0]);
      } catch (error) {
        console.error(error);
        setError("Der opstod en fejl under hentning af event. Prøv igen senere.");
      } finally {
        setLoading(false);
      }
    }
  
      getEvent();
    }, [eventId]);
  
    return { event, loading, error };
}