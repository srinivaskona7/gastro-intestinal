// Client-side study state. Everything lives in localStorage under 'gi-atlas:'.
const P = 'gi-atlas:';

function read<T>(key: string, fallback: T): T {
  try { const v = localStorage.getItem(P + key); return v ? (JSON.parse(v) as T) : fallback; } catch { return fallback; }
}
function write(key: string, value: unknown) {
  try { localStorage.setItem(P + key, JSON.stringify(value)); } catch { /* private mode: progress just won't persist */ }
}

export const getLearned = (): Set<string> => {
  const v = read<unknown>('learned', []);
  return new Set(Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : []);
};
export function setLearned(slug: string, on: boolean) {
  const s = getLearned();
  on ? s.add(slug) : s.delete(slug);
  write('learned', [...s]);
  touch(slug);
}

export type Activity = { slug: string; viewedAt: number; visits: number };
export const getActivity = (): Record<string, Activity> => read('activity', {});
export function touch(slug: string) {
  const a = getActivity();
  a[slug] = { slug, viewedAt: Date.now(), visits: (a[slug]?.visits ?? 0) + 1 };
  write('activity', a);
}
export const getBookmarks = (): Set<string> => new Set(read<string[]>('bookmarks', []));
export function toggleBookmark(slug: string) {
  const b = getBookmarks(); b.has(slug) ? b.delete(slug) : b.add(slug); write('bookmarks', [...b]);
}
export const getNotes = (): Record<string, string> => read('notes', {});
export function setNote(slug: string, note: string) { const n = getNotes(); note.trim() ? n[slug] = note : delete n[slug]; write('notes', n); }
export const getQuizStats = () => read<{ correct: number; answered: number; sessions: number; streak: number }>('quiz-stats', { correct: 0, answered: 0, sessions: 0, streak: 0 });
export function recordQuiz(correct: boolean, finished = false) { const s = getQuizStats(); s.correct += correct ? 1 : 0; s.answered++; if (finished) s.sessions++; write('quiz-stats', s); }

// Leitner boxes 1-3; unseen cards count as box 1.
export const getBoxes = (): Record<string, number> => {
  const v = read<unknown>('leitner', {});
  const out: Record<string, number> = {};
  if (v && typeof v === 'object' && !Array.isArray(v))
    for (const [k, n] of Object.entries(v)) if (n === 1 || n === 2 || n === 3) out[k] = n;
  return out;
};
export function grade(id: string, gotIt: boolean) {
  const b = getBoxes();
  b[id] = gotIt ? Math.min(3, (b[id] ?? 1) + 1) : 1;
  write('leitner', b);
}
