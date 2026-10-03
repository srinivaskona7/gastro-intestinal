import { getCollection } from 'astro:content';
import { extractCards } from '../lib/cards.mjs';

// Quiz deck built from every topic's Flashcards block at build time.
export async function GET() {
  const all = (await getCollection('topics')).sort((a, b) => a.data.order - b.data.order);
  const cards = all.flatMap((t) =>
    extractCards(t.body ?? '', t.id).map((c) => ({ ...c, slug: t.id, title: t.data.title, part: t.data.part, group: t.data.group })),
  );
  return new Response(JSON.stringify({ cards }), { headers: { 'Content-Type': 'application/json' } });
}
