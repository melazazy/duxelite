import { ProjectDetail } from '../hooks/useProject';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Fetch all projects
 */
export const fetchProjects = async (): Promise<ProjectDetail[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    if (!data.success || !Array.isArray(data.data)) {
      throw new Error('Invalid response format from server');
    }
    
    // Transform each project in the array
    return data.data.map((project: any) => ({
      id: project.id.toString(),
      slug: project.slug,
      title: project.title,
      description: project.description,
      category: project.category?.name || 'Uncategorized',
      image: project.image,
      client: project.client,
      date: project.year?.toString() || new Date().getFullYear().toString(),
      demoUrl: project.url || undefined,
      githubUrl: project.github_url || undefined,
      technologies: Array.isArray(project.technologies) 
        ? project.technologies 
        : (typeof project.technologies === 'string' 
            ? JSON.parse(project.technologies) 
            : []),
      features: Array.isArray(project.features) 
        ? project.features 
        : (typeof project.features === 'string' 
            ? JSON.parse(project.features) 
            : []),
      screenshots: project.images && Array.isArray(project.images) 
        ? project.images 
        : (typeof project.images === 'string' 
            ? JSON.parse(project.images) 
            : [])
    }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

/**
 * Fetch a single project by slug
 */
export const fetchProjectBySlug = async (slug: string): Promise<ProjectDetail> => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${slug}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Project not found');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    if (!data.success || !data.data) {
      throw new Error('Invalid response format from server');
    }
    
    // Transform the API response to match our ProjectDetail interface
    const projectData = data.data;
    return {
      id: projectData.id.toString(),
      slug: projectData.slug,
      title: projectData.title,
      description: projectData.description,
      category: projectData.category?.name || 'Uncategorized',
      image: projectData.image,
      client: projectData.client,
      date: projectData.year?.toString() || new Date().getFullYear().toString(),
      demoUrl: projectData.url || undefined,
      githubUrl: projectData.github_url || undefined,
      technologies: Array.isArray(projectData.technologies) 
        ? projectData.technologies 
        : (typeof projectData.technologies === 'string' 
            ? JSON.parse(projectData.technologies) 
            : []),
      features: Array.isArray(projectData.features) 
        ? projectData.features 
        : (typeof projectData.features === 'string' 
            ? JSON.parse(projectData.features) 
            : []),
      screenshots: projectData.images && Array.isArray(projectData.images) 
        ? projectData.images 
        : (typeof projectData.images === 'string' 
            ? JSON.parse(projectData.images) 
            : [])
    };
  } catch (error) {
    console.error(`Error fetching project ${slug}:`, error);
    throw error;
  }
};

/**
 * Create a new project
 */
export const createProject = async (projectData: Omit<ProjectDetail, 'id' | 'slug'>): Promise<ProjectDetail> => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include authentication token if needed
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(projectData)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

/**
 * Update an existing project
 */
export const updateProject = async (slug: string, projectData: Partial<ProjectDetail>): Promise<ProjectDetail> => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${slug}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(projectData)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error updating project ${slug}:`, error);
    throw error;
  }
};

/**
 * Delete a project
 */
export const deleteProject = async (slug: string): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${slug}`, {
      method: 'DELETE',
      headers: {
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error deleting project ${slug}:`, error);
    throw error;
  }
};
