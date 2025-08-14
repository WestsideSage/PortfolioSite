export function withBase(path: string): string {
  const base = import.meta.env?.BASE_URL ?? '/';
  if (!path) return base;
  const hasLeadingSlash = path.startsWith('/');
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${normalizedBase}${hasLeadingSlash ? '' : '/'}${path}`;
}
