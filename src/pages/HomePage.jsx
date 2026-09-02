import { useState } from "react";
import useEvents from "../hooks/useEvents";
import { Link } from "react-router";
import EventGrid from "../components/EventGrid";
import { filterEvents, getEventCategories } from "../utils/eventFilter";
import EventFilters from "../components/EventFilters";

export default function HomePage() {
  const { events, loading, error } = useEvents();
   const [search, setSearch] = useState("");
   const [category, setCategory] = useState("Alle");
   
   const categories = getEventCategories(events);
   const filteredEvents = filterEvents(events, search, category);

  return (
    <>
      <header className="hero">
        <p className="eyebrow">Kultur i Aarhus</p>
        <h1>Find plads til noget nyt.</h1>
        <p className="hero-copy">
          Koncerter, talks og workshops samlet ét sted. Find dit næste event, og
          tilmeld dig på få minutter.
        </p>
        <a className="hero-link" href="#events">
          Se kommende events ↓
        </a>
      </header>

      <main id="events">
        <section className="section-heading">
          <div>
            <p className="eyebrow dark">Det sker</p>
            <h2>Kommende events</h2>
          </div>
          <p>Kuraterede oplevelser i byen. Fra små scener til store idéer.</p>
        </section>

        <EventFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          categories={categories}
        /> 

        {loading && <p>Henter events...</p>}

        {error && <p>{error}</p>}
        {!loading && !error && (
       <EventGrid events={filteredEvents} />
        )}
      </main>
    </>
  );
}
