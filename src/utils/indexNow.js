/**
 * IndexNow: notify Bing/Yandex to re-crawl URLs.
 * Key file must be at https://mndigital.com/mndigitalkey123.txt (content = key).
 * Call this after publishing new/updated content (e.g. from backend or build script).
 * @see https://www.indexnow.org/
 */
const INDEXNOW_KEY = 'a7f3c9e2b1d40856';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

export async function notifyIndexNow(urlList) {
  const list = Array.isArray(urlList) ? urlList : [urlList];
  const body = {
    host: 'mndigital.com',
    key: INDEXNOW_KEY,
    keyLocation: 'https://mndigital.com/mndigitalkey123.txt',
    urlList: list.map((u) => (u.startsWith('http') ? u : `https://mndigital.com${u}`)),
  };
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return { ok: res.ok, status: res.status };
}
