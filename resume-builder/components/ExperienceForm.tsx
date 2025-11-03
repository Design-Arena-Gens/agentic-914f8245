'use client';

import { ResumeData, Experience } from '@/types/resume';

interface ExperienceFormProps {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
}

export function ExperienceForm({ resumeData, setResumeData }: ExperienceFormProps) {
  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    };
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, newExperience],
    });
  };

  const updateExperience = (id: string, field: string, value: string | boolean) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const deleteExperience = (id: string) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.filter((exp) => exp.id !== id),
    });
  };

  return (
    <div className="space-y-6">
      {resumeData.experience.map((exp) => (
        <div key={exp.id} className="p-4 border border-gray-200 rounded-lg space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Experience Entry</h3>
            <button
              onClick={() => deleteExperience(exp.id)}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              Delete
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company *
            </label>
            <input
              type="text"
              value={exp.company}
              onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tech Corp"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Position *
            </label>
            <input
              type="text"
              value={exp.position}
              onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Software Engineer"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="month"
                value={exp.startDate}
                onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="month"
                value={exp.endDate}
                onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                disabled={exp.current}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id={`current-${exp.id}`}
              checked={exp.current}
              onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor={`current-${exp.id}`} className="ml-2 text-sm text-gray-700">
              I currently work here
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={exp.description}
              onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="• Developed and maintained web applications&#10;• Collaborated with cross-functional teams&#10;• Improved system performance by 30%"
            />
          </div>
        </div>
      ))}

      <button
        onClick={addExperience}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        + Add Experience
      </button>
    </div>
  );
}
