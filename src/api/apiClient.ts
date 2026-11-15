/// <reference types="vite/client" />
import axios from 'axios';

const baseURL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:8080/api';

const client = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const portfolioAPI = {
  getPersonalInfo: () => client.get('/personal-info'),
  updatePersonalInfo: (data: any) => client.put('/personal-info', data),
  getProjects: () => client.get('/projects'),
  getProject: (id: string | number) => client.get(`/projects/${id}`),
};

export default client;
