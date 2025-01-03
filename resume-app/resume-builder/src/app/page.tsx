'use client'

import { useState } from 'react'
import { Button } from '../component/ui/button'
import { Input } from '../component/ui/input'
import { Textarea } from '../component/ui/textarea'
import { Label } from '../component/ui/label'
import ResumePreview from '../component/ResumePreview'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
  })

  const [showPreview, setShowPreview] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPreview(true)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Resume Builder</h1>
      {!showPreview ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="summary">Professional Summary</Label>
            <Textarea
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="experience">Work Experience</Label>
            <Textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="education">Education</Label>
            <Textarea
              id="education"
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="skills">Skills</Label>
            <Textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              required
            />
          </div>
          <Button type="submit">Generate Resume</Button>
        </form>
      ) : (
        <div>
          <ResumePreview data={formData} />
          <Button onClick={() => setShowPreview(false)} className="mt-4">
            Edit Resume
          </Button>
        </div>
      )}
    </div>
  )
}

