const siteStartedAtIsoValue = '2026-05-29T21:40:43+08:00';
const siteStartedHashValue = 'dd42d40';
const timeZone = 'Asia/Shanghai';

function readEnv(name: string) {
  if (typeof process === 'undefined') return '';
  return process.env[name]?.trim() || '';
}

function safeDate(value: string, fallback: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return new Date(fallback);
  return date;
}

function shortHash(value: string) {
  const clean = value.trim();
  if (!clean) return 'local';
  return clean.slice(0, 7);
}

const configuredBuildTime = readEnv('PUBLIC_BUILD_TIME') || readEnv('BUILD_TIME') || '';

const configuredCommitHash =
  readEnv('PUBLIC_COMMIT_SHA') || readEnv('CF_PAGES_COMMIT_SHA') || readEnv('GITHUB_SHA') || '';

const buildTimeIso = configuredBuildTime || new Date().toISOString();

function dateParts(date: Date) {
  const parts = new Intl.DateTimeFormat('zh-CN', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  const get = (type: string) => parts.find((part) => part.type === type)?.value || '';

  return {
    year: Number(get('year')),
    month: Number(get('month')),
    day: Number(get('day')),
  };
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function timeParts(date: Date) {
  const parts = new Intl.DateTimeFormat('zh-CN', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    hourCycle: 'h23',
  }).formatToParts(date);

  const get = (type: string) => parts.find((part) => part.type === type)?.value || '00';

  return {
    hour: get('hour'),
    minute: get('minute'),
    second: get('second'),
  };
}

export function formatDate(date: Date) {
  const p = dateParts(date);
  return `${p.year}-${pad(p.month)}-${pad(p.day)}`;
}

export function formatDotDate(date: Date) {
  const p = dateParts(date);
  return `${p.year}.${pad(p.month)}.${pad(p.day)}`;
}

export function formatDateTime(date: Date) {
  const t = timeParts(date);
  return `${formatDotDate(date)} ${t.hour}:${t.minute}:${t.second}`;
}

export function formatMonth(date: Date) {
  const p = dateParts(date);
  return `${p.year}.${pad(p.month)}`;
}

export function formatWeekday(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    timeZone,
    weekday: 'short',
  }).format(date);
}

export function relativeDate(date: Date | string, now = new Date()) {
  const target =
    typeof date === 'string'
      ? new Date(date.includes('T') ? date : date + 'T00:00:00+08:00')
      : date;

  const targetNoon = new Date(formatDate(target) + 'T12:00:00+08:00').getTime();
  const nowNoon = new Date(formatDate(now) + 'T12:00:00+08:00').getTime();
  const days = Math.floor((nowNoon - targetNoon) / 86400000);

  if (days < 1) return '今天';
  if (days === 1) return '昨天';
  if (days < 30) return `${days} 天前`;
  if (days < 365) return `${Math.floor(days / 30)} 个月前`;
  return `${Math.floor(days / 365)} 年前`;
}

export const siteStartedHash = siteStartedHashValue;
export const siteUpdatedHash = shortHash(configuredCommitHash);

export const siteStartedAtIso = siteStartedAtIsoValue;
export const siteUpdatedAtIso = buildTimeIso;

export const siteStartedAt = safeDate(siteStartedAtIso, siteStartedAtIsoValue);
export const siteUpdatedAt = safeDate(siteUpdatedAtIso, new Date().toISOString());

export function getSiteAge(now = new Date()) {
  const diffMs = Math.max(0, now.getTime() - siteStartedAt.getTime());
  const days = Math.floor(diffMs / 86400000);
  const hours = Math.floor((diffMs % 86400000) / 3600000);
  const minutes = Math.floor((diffMs % 3600000) / 60000);
  const seconds = Math.floor((diffMs % 60000) / 1000);
  const weeks = Math.floor(days / 7);

  const start = dateParts(siteStartedAt);
  const current = dateParts(now);
  const months = Math.max(0, (current.year - start.year) * 12 + current.month - start.month);

  const label = `${days} 天 ${hours} 小时`;
  const preciseLabel = `${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`;

  return {
    days,
    hours,
    minutes,
    seconds,
    weeks,
    months,
    label,
    preciseLabel,
  };
}

export const siteStartedDate = formatDate(siteStartedAt);
export const siteStartedDotDate = formatDotDate(siteStartedAt);
export const siteStartedDateTime = formatDateTime(siteStartedAt);
export const siteStartedMonth = formatMonth(siteStartedAt);

export const siteUpdatedDate = formatDate(siteUpdatedAt);
export const siteUpdatedDotDate = formatDotDate(siteUpdatedAt);
export const siteUpdatedDateTime = formatDateTime(siteUpdatedAt);

export const todayDate = formatDate(new Date());
export const todayWeekday = formatWeekday(new Date());
