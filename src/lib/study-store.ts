// Client-side study state. Everything lives in localStorage under 'gi-atlas:'.
const P = 'gi-atlas:';

function read<T>(key: string, fallback: T): T {
  try { const v = localStorage.getItem(P + key); return v ? (JSON.parse(v) as T) : fallback; } catch { return fallback; }
}
function write(key: string, value: unknown) {
  try { localStorage.setItem(P + key, JSON.stringify(value)); } catch { /* private mode: progress just won't persist */ }
}

export const getLearned = (): Set<string> => new Set(read<string[]>('learned', []));
export function setLearned(slug: string, on: boolean) {
  const s = getLearned();
  on ? s.add(slug) : s.delete(slug);
  write('learned', [...s]);
}

// Leitner boxes 1-3; unseen cards count as box 1.
export const getBoxes = (): Record<string, number> => read<Record<string, number>>('leitner', {});
export function grade(id: string, gotIt: boolean) {
  const b = getBoxes();
  b[id] = gotIt ? Math.min(3, (b[id] ?? 1) + 1) : 1;
  write('leitner', b);
}
