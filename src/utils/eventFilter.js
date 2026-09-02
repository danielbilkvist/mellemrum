export function getEventCategories(events) {
  return ["Alle", ...new Set(events.map((event) => event.category))];
}

export function filterEvents(events, search, category) {
  return events.filter((event) => {
    const searchText =
      `${event.title} ${event.summary} ${event.venue.name}`.toLowerCase();

    const matchesSearch = searchText.includes(search.toLowerCase());

    const matchesCategory = category === "Alle" || event.category === category;

    return matchesSearch && matchesCategory;
  });
}
