import { useState, useEffect } from 'react';
import { portfolioAPI } from '../api/apiClient';
import { profile as defaultProfile, projects as defaultProjects, type Project } from '../data/portfolio';

export interface BackendStatus {
  connected: boolean;
  loading: boolean;
}

export function usePortfolioData() {
  const [profile, setProfile] = useState(defaultProfile);
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [status, setStatus] = useState<BackendStatus>({ connected: false, loading: true });

  useEffect(() => {
    let active = true;

    async function loadData() {
      try {
        const [infoRes, projRes] = await Promise.allSettled([
          portfolioAPI.getPersonalInfo(),
          portfolioAPI.getProjects()
        ]);

        if (!active) return;

        let isConnected = false;

        if (infoRes.status === 'fulfilled' && infoRes.value?.data) {
          const d = infoRes.value.data;
          setProfile(prev => ({
            ...prev,
            fullName: d.name || prev.fullName,
            displayName: d.name || prev.displayName,
            role: d.title || prev.role,
            intro: d.bio || prev.intro,
            email: d.email || prev.email,
            phone: d.phone || prev.phone,
            location: d.location || prev.location,
            links: {
              ...prev.links,
              github: d.github || prev.links.github,
              linkedin: d.linkedin || prev.links.linkedin,
            }
          }));
          isConnected = true;
        }

        if (projRes.status === 'fulfilled' && Array.isArray(projRes.value?.data) && projRes.value.data.length > 0) {
          isConnected = true;
        }

        setStatus({ connected: isConnected, loading: false });
      } catch (err) {
        if (active) {
          setStatus({ connected: false, loading: false });
        }
      }
    }

    loadData();
    return () => { active = false; };
  }, []);

  return { profile, projects, status };
}
