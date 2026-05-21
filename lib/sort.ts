export function getItemTimestamp(item: { date?: string; id?: string }): number {
  if (item.date) {
    const d = new Date(item.date);
    if (!Number.isNaN(d.getTime())) return d.getTime();
  }
  const id = Number(item.id);
  if (!Number.isNaN(id) && id > 1e11) return id;
  return 0;
}

export function sortByRecent<T extends { date?: string; id?: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => getItemTimestamp(b) - getItemTimestamp(a));
}
