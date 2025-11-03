'use client';

import { ResumeData, Skill } from '@/types/resume';

interface SkillsFormProps {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
}

export function SkillsForm({ resumeData, setResumeData }: SkillsFormProps) {
  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
      category: '',
    };
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, newSkill],
    });
  };

  const updateSkill = (id: string, field: string, value: string) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      ),
    });
  };

  const deleteSkill = (id: string) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((skill) => skill.id !== id),
    });
  };

  return (
    <div className="space-y-6">
      {resumeData.skills.map((skill) => (
        <div key={skill.id} className="p-4 border border-gray-200 rounded-lg space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Skill Entry</h3>
            <button
              onClick={() => deleteSkill(skill.id)}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              Delete
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skill Name *
              </label>
              <input
                type="text"
                value={skill.name}
                onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="JavaScript"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <input
                type="text"
                value={skill.category}
                onChange={(e) => updateSkill(skill.id, 'category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Programming Languages"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addSkill}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        + Add Skill
      </button>
    </div>
  );
}
