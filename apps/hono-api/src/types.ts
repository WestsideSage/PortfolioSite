export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'planning';
  createdAt: string;
}
