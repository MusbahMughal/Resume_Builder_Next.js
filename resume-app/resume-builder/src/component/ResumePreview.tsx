import React from 'react'

interface ResumeData {
  name: string
  email: string
  phone: string
  summary: string
  experience: string
  education: string
  skills: string
}

interface ResumePreviewProps {
  data: ResumeData
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 shadow-lg">
      <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
      <p className="text-gray-600 mb-4">{data.email} | {data.phone}</p>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
        <p>{data.summary}</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
        <p className="whitespace-pre-line">{data.experience}</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <p className="whitespace-pre-line">{data.education}</p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <p>{data.skills}</p>
      </section>
    </div>
  )
}

export default ResumePreview

