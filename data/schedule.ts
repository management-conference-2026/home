import { agenda } from './agenda';
import { event } from './event';

// Use the conference offset, regardless of the visitor's device timezone.
const date = event.date.slice(0, 10);
const offset = event.date.slice(-6);
const schedule = agenda.map(session => ({
  id: session.id,
  start: Date.parse(`${date}T${session.start}:00${offset}`),
  end: Date.parse(`${date}T${session.end}:00${offset}`),
}));

export function getLiveSessionIds(now: number): string[] {
  return schedule.filter(session => now >= session.start && now < session.end).map(session => session.id);
}
