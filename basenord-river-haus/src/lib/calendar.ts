import { getAccessToken } from './auth';

export const addEventToCalendar = async (eventDetails: { title: string, description: string, dateStr: string, timeStr: string }) => {
  const token = await getAccessToken();
  if (!token) throw new Error("No access token available. Please sign in first.");

  // Parse custom date formats like "Oct 12" and "18:00 - 21:00"
  // Note: hardcoded year to the current one or a fixed year if none is provided.
  const year = new Date().getFullYear();
  const [startTime, endTime] = eventDetails.timeStr.split('-').map(s => s.trim());
  const monthDay = eventDetails.dateStr; // "Oct 12"
  
  const startDate = new Date(`${monthDay}, ${year} ${startTime}`);
  const endDate = new Date(`${monthDay}, ${year} ${endTime}`);

  const event = {
    summary: eventDetails.title,
    description: eventDetails.description,
    start: {
      dateTime: startDate.toISOString(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    end: {
      dateTime: endDate.toISOString(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    location: "BaseNord, East Legon",
  };

  const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || "Failed to add event to calendar");
  }

  return await response.json();
};
