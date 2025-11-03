'use client';

import { ResumeData, Education } from '@/types/resume';

interface EducationFormProps {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
}

export function EducationForm({ resumeData, setResumeData }: EducationFormProps) {
  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: '',
    };
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, newEducation],
    });
  };

  const updateEducation = (id: string, field: string, value: string) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const deleteEducation = (id: string) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter((edu) => edu.id !== id),
    });
  };

  return (
    <div className="space-y-6">
      {resumeData.education.map((edu) => (
        <div key={edu.id} className="p-4 border border-gray-200 rounded-lg space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Education Entry</h3>
            <button
              onClick={() => deleteEducation(edu.id)}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              Delete
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Institution *
            </label>
            <input
              type="text"
              value={edu.institution}
              onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="University of California"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Degree *
            </label>
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Bachelor of Science"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Field of Study *
            </label>
            <input
              type="text"
              value={edu.field}
              onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Computer Science"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="month"
                value={edu.startDate}
                onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="month"
                value={edu.endDate}
                onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              GPA (Optional)
            </label>
            <input
              type="text"
              value={edu.gpa}
              onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="3.8"
            />
          </div>
        </div>
      ))}

      <button
        onClick={addEducation}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        + Add Education
      </button>
    </div>
  );
}
