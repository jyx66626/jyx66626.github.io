import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, extname } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const port = Number(process.env.PORT || 4173);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8' };
const assets = new Set(['favicon.svg', 'newsreader-latin.woff2', 'newsreader-italic-latin.woff2', 'noto-serif-sc-subset.woff2', 'noto-sans-sc-subset.woff2', 'OFL-Newsreader.txt', 'OFL-NotoSerifSC.txt', 'OFL-NotoSansSC.txt']);

createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  try {
    const path = new URL(request.url, 'http://localhost').pathname;
    const file = path === '/' ? 'index.html' : path.slice(1);
    const allowed = ['index.html', 'style.css', '404.html'].includes(file) || (file.startsWith('assets/') && assets.has(file.slice(7)));
    const selected = allowed ? file : '404.html';
    const data = await readFile(resolve(root, selected));
    response.writeHead(allowed ? 200 : 404, {
      'Content-Type': types[extname(selected)] || 'application/octet-stream',
      'Content-Length': data.length,
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    });
    response.end(request.method === 'HEAD' ? undefined : data);
  } catch {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Preview unavailable.');
  }
}).listen(port, '127.0.0.1', () => console.log(`Local preview: http://127.0.0.1:${port}/`));
