import axios from 'axios';
import { apiConfig } from '../config';

const client = axios.create({
  baseURL: apiConfig.baseURL,
  timeout: apiConfig.timeout,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const portfolioAPI = {
  getPersonalInfo: () => client.get('/personal-info'),
  updatePersonalInfo: (data: any) => client.put('/personal-info', data),
  getProjects: () => client.get('/projects'),
  getProject: (id: string | number) => client.get(`/projects/${id}`),
  createProject: (data: any) => client.post('/projects', data),
  updateProject: (id: string | number, data: any) => client.put(`/projects/${id}`, data),
  deleteProject: (id: string | number) => client.delete(`/projects/${id}`)
};

export default client;
