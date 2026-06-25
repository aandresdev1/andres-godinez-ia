import express from 'express';
import { Resend } from 'resend';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3000;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'hello@aandresdev.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'Landing Andres <onboarding@resend.dev>';

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;
if (!resend) {
  console.warn('[startup] RESEND_API_KEY not set — /api/contact will accept submissions but only log them.');
}

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '64kb' }));

app.post('/api/contact', async (req, res) => {
  const { nombre, email, empresa, mensaje, _hp } = req.body || {};

  if (_hp) return res.json({ ok: true });

  const n = String(nombre || '').trim();
  const e = String(email || '').trim();
  const c = String(empresa || '').trim();
  const m = String(mensaje || '').trim();

  if (!n || !e || !m) {
    return res.status(400).json({ error: 'Faltan campos requeridos.' });
  }
  if (n.length > 200 || e.length > 200 || c.length > 200 || m.length > 5000) {
    return res.status(400).json({ error: 'Algún campo excede el tamaño permitido.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
    return res.status(400).json({ error: 'Email inválido.' });
  }

  const payload = { nombre: n, email: e, empresa: c, mensaje: m };

  if (!resend) {
    console.log('[contact] (dev mode, no API key) submission:', payload);
    return res.json({ ok: true, dev: true });
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: e,
      subject: `Nuevo contacto desde la landing — ${n}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 560px;">
          <h2 style="margin: 0 0 12px;">Nuevo mensaje desde la landing</h2>
          <table style="border-collapse: collapse;">
            <tr><td style="padding: 6px 12px 6px 0;"><strong>Nombre</strong></td><td>${escapeHtml(n)}</td></tr>
            <tr><td style="padding: 6px 12px 6px 0;"><strong>Email</strong></td><td><a href="mailto:${escapeHtml(e)}">${escapeHtml(e)}</a></td></tr>
            <tr><td style="padding: 6px 12px 6px 0;"><strong>Empresa</strong></td><td>${escapeHtml(c || '—')}</td></tr>
          </table>
          <p style="margin: 18px 0 6px;"><strong>Mensaje</strong></p>
          <p style="white-space: pre-wrap; background: #f6f6f6; padding: 12px 14px; border-radius: 6px; margin: 0;">${escapeHtml(m)}</p>
        </div>
      `,
    });

    if (error) {
      console.error('[contact] resend error:', error);
      return res.status(502).json({ error: 'No pudimos enviar el mensaje. Intenta más tarde.' });
    }
    return res.json({ ok: true });
  } catch (err) {
    console.error('[contact] exception:', err);
    return res.status(500).json({ error: 'Error interno.' });
  }
});

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

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

app.listen(PORT, () => {
  console.log(`[startup] listening on http://0.0.0.0:${PORT}`);
});
