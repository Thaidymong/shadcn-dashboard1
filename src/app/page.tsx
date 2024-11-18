import { redirectToEventAttendees } from "./(admin)/actions/redirect-to-event-attendees";

export default async function RootPage() {
  await redirectToEventAttendees();

  return <></>;
}
