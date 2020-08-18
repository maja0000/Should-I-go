import React, { useState, useEffect } from 'react';

export default function useEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents();
  }, []);
  async function getEvents() {
    try {
      let res = await fetch(
        `https://api.seatgeek.com/2/events?client_id=MjEyNTA2NjZ8MTU5NzczODAwNS40Mw`
      );
      let json = await res.json();
      setEvents(json.events);
      setLoading(false);
      //   console.log('only events', json.events);
    } catch (err) {
      console.log(err);
    }
  }
  return { events, loading };
}
