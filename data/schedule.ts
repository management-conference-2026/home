import { agenda, type Session } from './agenda';
import { event } from './event';

// Use the conference offset, regardless of the visitor's device timezone.
const date = event.date.slice(0, 10);
const offset = event.date.slice(-6);
const conferenceStart = Date.parse(event.date);
const schedule = agenda.map(session => ({
  id: session.id,
  start: Date.parse(`${date}T${session.start}:00${offset}`),
  end: Date.parse(`${date}T${session.end}:00${offset}`),
}));

export function getLiveSessionIds(now: number): string[] {
  return schedule.filter(session => now >= session.start && now < session.end).map(session => session.id);
}

export type ConferenceStatus =
  | { phase: 'upcoming' }
  | { phase: 'live'; sessions: Session[] }
  | { phase: 'between'; next: Session }
  | { phase: 'finished' };

export function getConferenceStatus(now: number): ConferenceStatus {
  if (now < conferenceStart) return { phase: 'upcoming' };
  const live = getLiveSessionIds(now);
  if (live.length) return { phase: 'live', sessions: agenda.filter(session => live.includes(session.id)) };
  const next = schedule.find(session => session.start > now);
  const nextSession = next && agenda.find(session => session.id === next.id);
  return nextSession ? { phase: 'between', next: nextSession } : { phase: 'finished' };
}
