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
}

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
