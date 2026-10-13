import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

const DB_PATH = path.resolve(__dirname, 'attendance_database.json');

const INITIAL_ATTENDEES = [
  { id: "att-1", name: "Dato' Sri Zamani & Isteri", pax: 2, status: "attending", time: "2 jam lepas", side: "groom" },
  { id: "att-2", name: "Cikgu Hafiz & Cikgu Salina", pax: 4, status: "attending", time: "5 jam lepas", side: "bride" },
  { id: "att-3", name: "Dr. Aiman & Pasangan", pax: 2, status: "attending", time: "Semalam", side: "groom" },
  { id: "att-4", name: "Farah Adila (Keluarga)", pax: 3, status: "attending", time: "Semalam", side: "bride" },
  { id: "att-5", name: "Pak Teh Razak", pax: 2, status: "attending", time: "2 hari lepas", side: "groom" },
  { id: "att-6", name: "Ustaz Hamdan", pax: 1, status: "declined", time: "3 hari lepas", side: "bride" },
];

function attendanceApiPlugin(): Plugin {
  return {
    name: 'attendance-api',
    configureServer(server) {
      // Ensure DB file exists
      if (!fs.existsSync(DB_PATH)) {
        fs.writeFileSync(DB_PATH, JSON.stringify(INITIAL_ATTENDEES, null, 2), 'utf-8');
      }

      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/attendance' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json');
          try {
            const data = fs.readFileSync(DB_PATH, 'utf-8');
            res.end(data);
          } catch {
            res.end(JSON.stringify(INITIAL_ATTENDEES));
          }
          return;
        }

        if (req.url === '/api/attendance' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const newRecord = JSON.parse(body);
              let existing = [];
              if (fs.existsSync(DB_PATH)) {
                existing = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
              }
              existing.unshift(newRecord);
              fs.writeFileSync(DB_PATH, JSON.stringify(existing, null, 2), 'utf-8');

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, record: newRecord, total: existing.length }));
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: String(err) }));
            }
          });
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), attendanceApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
