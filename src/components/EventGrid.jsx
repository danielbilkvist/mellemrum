import EventCard from './EventCard';
import style from './EventGrid.module.css';

export default function EventGrid({ events }) {
    return (
         <section className={style.grid}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </section>
    );
}