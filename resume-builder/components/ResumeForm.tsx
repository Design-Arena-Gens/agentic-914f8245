'use client';

import { useState } from 'react';
import { ResumeData, Experience, Education, Skill, Project } from '@/types/resume';
import { PersonalInfoForm } from './PersonalInfoForm';
import { ExperienceForm } from './ExperienceForm';
import { EducationForm } from './EducationForm';
import { SkillsForm } from './SkillsForm';
import { ProjectsForm } from './ProjectsForm';

interface ResumeFormProps {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
}

export function ResumeForm({ resumeData, setResumeData }: ResumeFormProps) {
  const [activeTab, setActiveTab] = useState<'personal' | 'experience' | 'education' | 'skills' | 'projects'>('personal');

  const tabs = [
    { id: 'personal' as const, label: 'Personal Info' },
    { id: 'experience' as const, label: 'Experience' },
    { id: 'education' as const, label: 'Education' },
    { id: 'skills' as const, label: 'Skills' },
    { id: 'projects' as const, label: 'Projects' },
  ];

  return (
    <div>
      <div className="flex space-x-2 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {activeTab === 'personal' && (
          <PersonalInfoForm resumeData={resumeData} setResumeData={setResumeData} />
        )}
        {activeTab === 'experience' && (
          <ExperienceForm resumeData={resumeData} setResumeData={setResumeData} />
        )}
        {activeTab === 'education' && (
          <EducationForm resumeData={resumeData} setResumeData={setResumeData} />
        )}
        {activeTab === 'skills' && (
          <SkillsForm resumeData={resumeData} setResumeData={setResumeData} />
        )}
        {activeTab === 'projects' && (
          <ProjectsForm resumeData={resumeData} setResumeData={setResumeData} />
        )}
      </div>
    </div>
  );
}
