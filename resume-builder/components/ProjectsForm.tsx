'use client';

import { ResumeData, Project } from '@/types/resume';

interface ProjectsFormProps {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
}

export function ProjectsForm({ resumeData, setResumeData }: ProjectsFormProps) {
  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: '',
      description: '',
      technologies: '',
      link: '',
    };
    setResumeData({
      ...resumeData,
      projects: [...resumeData.projects, newProject],
    });
  };

  const updateProject = (id: string, field: string, value: string) => {
    setResumeData({
      ...resumeData,
      projects: resumeData.projects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      ),
    });
  };

  const deleteProject = (id: string) => {
    setResumeData({
      ...resumeData,
      projects: resumeData.projects.filter((project) => project.id !== id),
    });
  };

  return (
    <div className="space-y-6">
      {resumeData.projects.map((project) => (
        <div key={project.id} className="p-4 border border-gray-200 rounded-lg space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Project Entry</h3>
            <button
              onClick={() => deleteProject(project.id)}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              Delete
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Name *
            </label>
            <input
              type="text"
              value={project.name}
              onChange={(e) => updateProject(project.id, 'name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Portfolio Website"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              value={project.description}
              onChange={(e) => updateProject(project.id, 'description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Built a responsive portfolio website showcasing my work..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Technologies
            </label>
            <input
              type="text"
              value={project.technologies}
              onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="React, Next.js, Tailwind CSS"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Link (Optional)
            </label>
            <input
              type="url"
              value={project.link}
              onChange={(e) => updateProject(project.id, 'link', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://github.com/username/project"
            />
          </div>
        </div>
      ))}

      <button
        onClick={addProject}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        + Add Project
      </button>
    </div>
  );
}
