import { execSync } from 'node:child_process';

const fallbackStartedAt = '2026-05-29T21:40:43+08:00';
const fallbackUpdatedAt = '2026-06-05T20:40:46+08:00';
const timeZone = 'Asia/Shanghai';

function runGit(command: string) {
  return execSync(command, {
    cwd: process.cwd(),
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  }).trim();
}

function readFirstCommitIso() {
  try {
    const roots = runGit('git rev-list --max-parents=0 HEAD').split(/\r?\n/).filter(Boolean);
    const dates = roots.map((hash: string) => runGit('git show -s --format=%cI ' + hash));
    return dates.sort()[0] || fallbackStartedAt;
  } catch {
    return fallbackStartedAt;
  }
}

function readLatestCommitIso() {
  try {
    return runGit('git log -1 --format=%cI') || fallbackUpdatedAt;
  } catch {
    return fallbackUpdatedAt;
  }
}

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

export function formatDate(date: Date) {
  const p = dateParts(date);
  return `${p.year}-${pad(p.month)}-${pad(p.day)}`;
}

export function formatDotDate(date: Date) {
  const p = dateParts(date);
  return `${p.year}.${pad(p.month)}.${pad(p.day)}`;
}

export function formatMonth(date: Date) {
  const p = dateParts(date);
  return `${p.year}.${pad(p.month)}`;
}

export function formatWeekday(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', { timeZone, weekday: 'short' }).format(date);
}

export function relativeDate(date: Date | string, now = new Date()) {
  const target = typeof date === 'string' ? new Date(date + 'T00:00:00+08:00') : date;
  const targetNoon = new Date(formatDate(target) + 'T12:00:00+08:00').getTime();
  const nowNoon = new Date(formatDate(now) + 'T12:00:00+08:00').getTime();
  const days = Math.floor((nowNoon - targetNoon) / 86400000);

  if (days < 1) return '今天';
  if (days === 1) return '昨天';
  if (days < 30) return `${days} 天前`;
  if (days < 365) return `${Math.floor(days / 30)} 个月前`;
  return `${Math.floor(days / 365)} 年前`;
}

export function getSiteAge(now = new Date()) {
  const start = dateParts(siteStartedAt);
  const current = dateParts(now);
  const days = Math.max(
    0,
    Math.floor(
      (new Date(formatDate(now) + 'T12:00:00+08:00').getTime() -
        new Date(formatDate(siteStartedAt) + 'T12:00:00+08:00').getTime()) /
        86400000,
    ),
  );
  const weeks = Math.floor(days / 7);
  const months = Math.max(0, (current.year - start.year) * 12 + current.month - start.month);
  const label =
    months >= 12 ? Math.floor(months / 12) + ' 年 ' + (months % 12) + ' 个月' : months + ' 个月';

  return { days, weeks, months, label };
}

export const siteStartedAtIso = readFirstCommitIso();
export const siteUpdatedAtIso = readLatestCommitIso();
export const siteStartedAt = new Date(siteStartedAtIso);
export const siteUpdatedAt = new Date(siteUpdatedAtIso);
export const siteStartedDate = formatDate(siteStartedAt);
export const siteStartedDotDate = formatDotDate(siteStartedAt);
export const siteStartedMonth = formatMonth(siteStartedAt);
export const siteUpdatedDate = formatDate(siteUpdatedAt);
export const siteUpdatedDotDate = formatDotDate(siteUpdatedAt);
export const todayDate = formatDate(new Date());
export const todayWeekday = formatWeekday(new Date());
