import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import contactHandler from './lib/contact-handler.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

if (!process.env.RESEND_API_KEY) {
  console.warn('[startup] RESEND_API_KEY not set — /api/contact will accept submissions but only log them.');
}

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '64kb' }));

app.post('/api/contact', contactHandler);

app.get('/healthz', (_req, res) => res.json({ ok: true }));

app.use(express.static(__dirname, {
  index: 'index.html',
  extensions: ['html'],
  setHeaders(res, filePath) {
    if (filePath.endsWith('index.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  },
}));

app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, () => {
  console.log(`[startup] listening on http://0.0.0.0:${PORT}`);
});
