'use client';

import { ResumeData } from '@/types/resume';

interface PersonalInfoFormProps {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
}

export function PersonalInfoForm({ resumeData, setResumeData }: PersonalInfoFormProps) {
  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value,
      },
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          value={resumeData.personalInfo.fullName}
          onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          value={resumeData.personalInfo.email}
          onChange={(e) => updatePersonalInfo('email', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="john.doe@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          value={resumeData.personalInfo.phone}
          onChange={(e) => updatePersonalInfo('phone', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Location
        </label>
        <input
          type="text"
          value={resumeData.personalInfo.location}
          onChange={(e) => updatePersonalInfo('location', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="San Francisco, CA"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          LinkedIn
        </label>
        <input
          type="url"
          value={resumeData.personalInfo.linkedin}
          onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="linkedin.com/in/johndoe"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Website/Portfolio
        </label>
        <input
          type="url"
          value={resumeData.personalInfo.website}
          onChange={(e) => updatePersonalInfo('website', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="johndoe.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Professional Summary
        </label>
        <textarea
          value={resumeData.personalInfo.summary}
          onChange={(e) => updatePersonalInfo('summary', e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="A brief summary of your professional background and career objectives..."
        />
      </div>
    </div>
  );
}
