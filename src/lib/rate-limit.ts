const windows = new Map<string, { count: number; startedAt: number }>();

export function allowRequest(
  key: string,
  limit = 30,
  windowMs = 60_000,
) {
  const now = Date.now();
  const current = windows.get(key);
  if (!current || now - current.startedAt > windowMs) {
    windows.set(key, { count: 1, startedAt: now });
    return true;
  }
  if (current.count >= limit) return false;
  current.count += 1;
  return true;
}

export function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim();
  return ip || request.headers.get("x-real-ip") || "unknown";
}
