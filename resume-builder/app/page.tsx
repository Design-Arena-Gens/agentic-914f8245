'use client';

import { useState } from 'react';
import { ResumeForm } from '@/components/ResumeForm';
import { ResumePreview } from '@/components/ResumePreview';
import { ResumeData } from '@/types/resume';

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      website: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: [],
    projects: []
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">AI Resume Builder</h1>
          <p className="text-gray-600">Create a professional resume in minutes</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Build Your Resume</h2>
            <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8 h-fit">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Preview</h2>
            <ResumePreview resumeData={resumeData} />
          </div>
        </div>
      </div>
    </main>
  );
}
