import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import { serve } from '@hono/node-server';
import { type Project } from './types';

const app = new Hono();

// Middleware
app.use('*', logger());
app.use('*', prettyJSON());
app.use('*', cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3002',
  credentials: true,
}));

// Health check
app.get('/healthz', (c) => c.json({ status: 'healthy' }));

// Sample project data
const projects: Project[] = [
  {
    id: '1',
    name: 'Project Alpha',
    description: 'A cutting-edge web application',
    status: 'active',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Project Beta',
    description: 'Machine learning platform',
    status: 'planning',
    createdAt: new Date().toISOString(),
  },
];

// Projects API
app.get('/v1/projects', (c) => {
  return c.json(projects);
});

app.get('/v1/projects/:id', (c) => {
  const id = c.req.param('id');
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return c.json({ error: 'Project not found' }, 404);
  }
  
  return c.json(project);
});

const port = Number(process.env.PORT) || 3003;

console.log(`🚀 Hono API Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});

export default app;
