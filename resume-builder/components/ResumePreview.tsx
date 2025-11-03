'use client';

import { ResumeData } from '@/types/resume';

interface ResumePreviewProps {
  resumeData: ResumeData;
}

export function ResumePreview({ resumeData }: ResumePreviewProps) {
  const formatDate = (date: string) => {
    if (!date) return '';
    const [year, month] = date.split('-');
    return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  const handleDownload = () => {
    const element = document.getElementById('resume-content');
    if (!element) return;

    const printWindow = window.open('', '', 'height=800,width=800');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Resume - ${resumeData.personalInfo.fullName}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; color: #333; }
            h1 { font-size: 28px; margin-bottom: 5px; color: #2563eb; }
            h2 { font-size: 20px; color: #1e40af; border-bottom: 2px solid #2563eb; padding-bottom: 5px; margin-top: 20px; }
            h3 { font-size: 16px; margin-bottom: 5px; }
            .contact-info { font-size: 14px; color: #666; margin-bottom: 20px; }
            .section { margin-bottom: 20px; }
            .entry { margin-bottom: 15px; }
            .entry-header { display: flex; justify-content: space-between; margin-bottom: 5px; }
            .date { color: #666; font-size: 14px; }
            ul { margin: 5px 0; padding-left: 20px; }
            .skills { display: flex; flex-wrap: wrap; gap: 10px; }
            .skill-tag { background: #e0e7ff; padding: 5px 10px; border-radius: 5px; font-size: 14px; }
            @media print {
              body { margin: 20px; }
            }
          </style>
        </head>
        <body>
          ${element.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

  const groupedSkills = resumeData.skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
        >
          Download PDF
        </button>
      </div>

      <div id="resume-content" className="bg-white p-8 rounded-lg border border-gray-200 max-h-[calc(100vh-200px)] overflow-y-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">
            {resumeData.personalInfo.fullName || 'Your Name'}
          </h1>
          <div className="text-sm text-gray-600 space-y-1">
            {resumeData.personalInfo.email && (
              <div>{resumeData.personalInfo.email}</div>
            )}
            {resumeData.personalInfo.phone && (
              <div>{resumeData.personalInfo.phone}</div>
            )}
            {resumeData.personalInfo.location && (
              <div>{resumeData.personalInfo.location}</div>
            )}
            {resumeData.personalInfo.linkedin && (
              <div>{resumeData.personalInfo.linkedin}</div>
            )}
            {resumeData.personalInfo.website && (
              <div>{resumeData.personalInfo.website}</div>
            )}
          </div>
        </div>

        {/* Summary */}
        {resumeData.personalInfo.summary && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-2 border-b-2 border-blue-600 pb-1">
              Professional Summary
            </h2>
            <p className="text-gray-700 whitespace-pre-line">{resumeData.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {resumeData.experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-2 border-b-2 border-blue-600 pb-1">
              Experience
            </h2>
            {resumeData.experience.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-800">{exp.position}</h3>
                    <div className="text-gray-600">{exp.company}</div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </div>
                </div>
                {exp.description && (
                  <p className="text-gray-700 text-sm whitespace-pre-line">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {resumeData.education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-2 border-b-2 border-blue-600 pb-1">
              Education
            </h2>
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-800">{edu.degree} in {edu.field}</h3>
                    <div className="text-gray-600">{edu.institution}</div>
                    {edu.gpa && <div className="text-sm text-gray-500">GPA: {edu.gpa}</div>}
                  </div>
                  <div className="text-sm text-gray-500">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {resumeData.skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-2 border-b-2 border-blue-600 pb-1">
              Skills
            </h2>
            {Object.entries(groupedSkills).map(([category, skills]) => (
              <div key={category} className="mb-3">
                <div className="font-medium text-gray-700 mb-1">{category}:</div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {resumeData.projects.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-2 border-b-2 border-blue-600 pb-1">
              Projects
            </h2>
            {resumeData.projects.map((project) => (
              <div key={project.id} className="mb-4">
                <h3 className="font-semibold text-gray-800">
                  {project.name}
                  {project.link && (
                    <span className="text-sm text-blue-600 ml-2">({project.link})</span>
                  )}
                </h3>
                {project.description && (
                  <p className="text-gray-700 text-sm mb-1">{project.description}</p>
                )}
                {project.technologies && (
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Technologies:</span> {project.technologies}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
