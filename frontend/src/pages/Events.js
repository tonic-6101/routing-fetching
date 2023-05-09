import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  console.log(data);

  // const events = useLoaderData();

  // if (events.isError) {
  //   return <p>{events.message}</p>;
  // }

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  const events = data.events; // Cannot read properties of undefined (reading 'map')
  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
  console.log(response);

  if (!response.ok) {
    return { isError: true, message: 'Could not fetch events.' };
  } else {
    return response;
  }
}
