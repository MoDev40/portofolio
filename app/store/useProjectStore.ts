import { create } from "zustand";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  stars: number;
  language: string;
  demoLink: string;
  sourceCodeLink: string;
  topics: string[];
  image: string;
  updatedAt: string;
}

interface ProjectStore {
  projects: GitHubRepo[];
  loading: boolean;
  error: string | null;
  filter: string;
  searchTerm: string;
  setProjects: (projects: GitHubRepo[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setFilter: (filter: string) => void;
  setSearchTerm: (searchTerm: string) => void;
  fetchProjects: () => Promise<void>;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],
  loading: true,
  error: null,
  filter: "all",
  searchTerm: "",
  setProjects: (projects) => set({ projects }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setFilter: (filter) => set({ filter }),
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  fetchProjects: async () => {
    try {
      const response = await fetch("/api/github");
      if (!response.ok) throw new Error("Failed to fetch projects");
      const data = await response.json();
      set({ projects: data, loading: false, error: null });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Failed to load projects",
        loading: false,
      });
    }
  },
}));
